import type { Message } from '../../types';
import { formatChatTimestamp } from '../../utils/dateFormat';
import styles from './MessageBubble.module.css';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`${styles.wrapper} ${isMe ? styles.me : styles.other}`}>
      <div className={`${styles.bubble} ${isMe ? styles.bubbleMe : styles.bubbleOther}`}>
        <p className={styles.text}>{message.text}</p>
        <span className={styles.time}>{formatChatTimestamp(message.timestamp)}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
