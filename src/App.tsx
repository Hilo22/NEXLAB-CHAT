import Sidebar from './features/sidebar/Sidebar';
import ChatWindow from './features/chat/ChatWindow';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Avatar from './components/Avatar/Avatar';
import styles from './App.module.css';

function App() {
  const activeConversationId = useSelector((state: RootState) => state.chat.activeConversationId);
  const conversations = useSelector((state: RootState) => state.chat.conversations);
  const activeConversation = conversations.find((c: { id: string }) => c.id === activeConversationId) ?? null;

  return (
    <div className={styles.app}>
      <Sidebar />
      <main className={styles.main}>
        {activeConversation ? (
          <div className={styles.mainContent}>
            <div className={styles.chatHeader}>
              <Avatar initials={activeConversation.avatar} size="sm" online />
              <div className={styles.chatHeaderInfo}>
                <span className={styles.chatHeaderName}>{activeConversation.name}</span>
                <span className={styles.chatHeaderStatus}>Online</span>
              </div>
            </div>
            <ChatWindow conversation={activeConversation} />
          </div>
        ) : (
          <div className={styles.placeholder}>
            <FontAwesomeIcon icon={faComments} className={styles.placeholderIcon} />
            <h2>Welcome to Nexlab Chat</h2>
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
