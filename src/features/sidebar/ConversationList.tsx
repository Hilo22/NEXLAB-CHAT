import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import type { Conversation } from '../../types';
import { setActiveConversation } from '../../store/chatSlice';
import ConversationItem from './ConversationItem';
import styles from './sidebar.module.css';

interface ConversationListProps {
  searchQuery: string;
}

const ConversationList = ({ searchQuery }: ConversationListProps) => {
  const dispatch = useDispatch();
  const { conversations, activeConversationId } = useSelector((state: RootState) => state.chat);

  const filtered = conversations.filter((c: { name: string }) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.conversationList}>
      {filtered.length === 0 ? (
        <p className={styles.empty}>No conversations found</p>
      ) : (
        filtered.map((conv: Conversation) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeConversationId}
            onClick={() => dispatch(setActiveConversation(conv.id))}
          />
        ))
      )}
    </div>
  );
};

export default ConversationList;
