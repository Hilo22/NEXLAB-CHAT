import type { Conversation } from '../../types';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import styles from './chat.module.css';

interface ChatWindowProps {
  conversation: Conversation;
}

const ChatWindow = ({ conversation }: ChatWindowProps) => {
  return (
    <div className={styles.chatWindow}>
      <MessageList messages={conversation.messages} />
      <ChatInput conversationId={conversation.id} />
    </div>
  );
};

export default ChatWindow;
