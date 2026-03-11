import Avatar from '../../components/Avatar/Avatar';
import type { Conversation } from '../../types';
import { formatMessageTime } from '../../utils/dateFormat';
import styles from './sidebar.module.css';

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

const ConversationItem = ({ conversation, isActive, onClick }: ConversationItemProps) => {
  return (
    <div
      className={`${styles.conversationItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <Avatar initials={conversation.avatar} online />
      <div className={styles.conversationInfo}>
        <div className={styles.conversationHeader}>
          <span className={styles.conversationName}>{conversation.name}</span>
          <span className={styles.conversationTime}>
            {formatMessageTime(conversation.lastMessageTime)}
          </span>
        </div>
        <div className={styles.conversationPreview}>
          <span className={styles.lastMessage}>{conversation.lastMessage}</span>
          {conversation.unreadCount > 0 && (
            <span className={styles.unreadBadge}>{conversation.unreadCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
