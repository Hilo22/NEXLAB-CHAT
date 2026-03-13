import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { sendMessage } from '../../store/chatSlice';
import type { AppDispatch } from '../../store/store';
import styles from './chat.module.css';

interface ChatInputProps {
  conversationId: string;
}

const ChatInput = ({ conversationId }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage({ conversationId, text: message.trim() }));
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.chatInput}>
      <button className={styles.attachButton} title="Attach file">
        <FontAwesomeIcon icon={faPaperclip} />
      </button>
      <input
        type="text"
        className={styles.input}
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className={styles.sendButton}
        onClick={handleSend}
        disabled={!message.trim()}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default ChatInput;
