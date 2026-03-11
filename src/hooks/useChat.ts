import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { sendMessage, setActiveConversation } from '../store/chatSlice';

const useChat = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { conversations, activeConversationId } = useSelector((state: RootState) => state.chat);

  const activeConversation = conversations.find((c: { id: string }) => c.id === activeConversationId) ?? null;

  const handleSend = (text: string) => {
    if (!activeConversationId || !text.trim()) return;
    dispatch(sendMessage({ conversationId: activeConversationId, text: text.trim() }));
  };

  const handleSelectConversation = (id: string) => {
    dispatch(setActiveConversation(id));
  };

  return {
    conversations,
    activeConversation,
    activeConversationId,
    handleSend,
    handleSelectConversation,
  };
};

export default useChat;
