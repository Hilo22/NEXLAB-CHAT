import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ConversationList from './ConversationList';
import logo from '../../assets/logo.svg';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img src={logo} alt="NEXLAB Chat" className={styles.headerLogo} />
        <h2 className={styles.headerTitle}>NEXLAB</h2>
      </div>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <ConversationList searchQuery={searchQuery} />
    </aside>
  );
};

export default Sidebar;
