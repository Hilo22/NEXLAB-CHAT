export interface Message {
  id: string;
  conversationId: string;
  text: string;
  sender: 'me' | 'other';
  timestamp: number;
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: number;
  unreadCount: number;
  messages: Message[];
}

export interface ChatState {
  conversations: Conversation[];
  activeConversationId: string | null;
}
