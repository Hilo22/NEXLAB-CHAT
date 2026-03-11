import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import ConversationList from './ConversationList';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <FontAwesomeIcon icon={faCommentDots} className={styles.headerIcon} />
        <h2 className={styles.headerTitle}>Chats</h2>
      </div>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <ConversationList searchQuery={searchQuery} />
    </aside>
  );
};

export default Sidebar;
