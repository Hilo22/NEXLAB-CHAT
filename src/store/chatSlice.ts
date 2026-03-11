import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { ChatState, Message, Conversation } from '../types';
import { loadState } from '../utils/storage';

const mockConversations: Conversation[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: 'AJ',
    lastMessage: 'Hey! How are you?',
    lastMessageTime: Date.now() - 60000,
    unreadCount: 2,
    messages: [
      { id: 'm1', conversationId: '1', text: 'Hi there!', sender: 'other', timestamp: Date.now() - 120000 },
      { id: 'm2', conversationId: '1', text: 'Hey! How are you?', sender: 'other', timestamp: Date.now() - 60000 },
    ],
  },
  {
    id: '2',
    name: 'Bob Smith',
    avatar: 'BS',
    lastMessage: 'See you tomorrow!',
    lastMessageTime: Date.now() - 3600000,
    unreadCount: 0,
    messages: [
      { id: 'm3', conversationId: '2', text: 'Are we still meeting tomorrow?', sender: 'other', timestamp: Date.now() - 7200000 },
      { id: 'm4', conversationId: '2', text: 'Yes, at 10am!', sender: 'me', timestamp: Date.now() - 5400000 },
      { id: 'm5', conversationId: '2', text: 'See you tomorrow!', sender: 'other', timestamp: Date.now() - 3600000 },
    ],
  },
  {
    id: '3',
    name: 'Carol Williams',
    avatar: 'CW',
    lastMessage: 'Thanks for the help!',
    lastMessageTime: Date.now() - 86400000,
    unreadCount: 1,
    messages: [
      { id: 'm6', conversationId: '3', text: 'Can you help me with the project?', sender: 'other', timestamp: Date.now() - 90000000 },
      { id: 'm7', conversationId: '3', text: 'Sure, what do you need?', sender: 'me', timestamp: Date.now() - 87000000 },
      { id: 'm8', conversationId: '3', text: 'Thanks for the help!', sender: 'other', timestamp: Date.now() - 86400000 },
    ],
  },
  {
    id: '4',
    name: 'David Lee',
    avatar: 'DL',
    lastMessage: 'Check out this link',
    lastMessageTime: Date.now() - 172800000,
    unreadCount: 0,
    messages: [
      { id: 'm9', conversationId: '4', text: 'Check out this link', sender: 'other', timestamp: Date.now() - 172800000 },
    ],
  },
  {
    id: '5',
    name: 'Emma Davis',
    avatar: 'ED',
    lastMessage: 'Happy birthday! 🎂',
    lastMessageTime: Date.now() - 259200000,
    unreadCount: 0,
    messages: [
      { id: 'm10', conversationId: '5', text: 'Happy birthday! 🎂', sender: 'me', timestamp: Date.now() - 259200000 },
    ],
  },
];

const defaultState: ChatState = {
  conversations: mockConversations,
  activeConversationId: null,
};

const persistedState = loadState();

const chatSlice = createSlice({
  name: 'chat',
  initialState: persistedState ?? defaultState,
  reducers: {
    setActiveConversation(state, action: PayloadAction<string>) {
      state.activeConversationId = action.payload;
      const conv = state.conversations.find((c: Conversation) => c.id === action.payload);
      if (conv) {
        conv.unreadCount = 0;
      }
    },

    sendMessage(state, action: PayloadAction<{ conversationId: string; text: string }>) {
      const { conversationId, text } = action.payload;
      const conv = state.conversations.find((c: Conversation) => c.id === conversationId);
      if (!conv) return;

      const newMessage: Message = {
        id: uuidv4(),
        conversationId,
        text,
        sender: 'me',
        timestamp: Date.now(),
      };

      conv.messages.push(newMessage);
      conv.lastMessage = text;
      conv.lastMessageTime = newMessage.timestamp;

      // Move conversation to top
      const index = state.conversations.indexOf(conv);
      if (index > 0) {
        state.conversations.splice(index, 1);
        state.conversations.unshift(conv);
      }
    },

    receiveMessage(state, action: PayloadAction<{ conversationId: string; text: string }>) {
      const { conversationId, text } = action.payload;
      const conv = state.conversations.find((c: Conversation) => c.id === conversationId);
      if (!conv) return;

      const newMessage: Message = {
        id: uuidv4(),
        conversationId,
        text,
        sender: 'other',
        timestamp: Date.now(),
      };

      conv.messages.push(newMessage);
      conv.lastMessage = text;
      conv.lastMessageTime = newMessage.timestamp;

      if (state.activeConversationId !== conversationId) {
        conv.unreadCount += 1;
      }

      const index = state.conversations.indexOf(conv);
      if (index > 0) {
        state.conversations.splice(index, 1);
        state.conversations.unshift(conv);
      }
    },
  },
});

export const { setActiveConversation, sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
