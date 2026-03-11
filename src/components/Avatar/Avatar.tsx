import styles from './Avatar.module.css';

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  online?: boolean;
}

const Avatar = ({ initials, size = 'md', online }: AvatarProps) => {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <span className={styles.initials}>{initials}</span>
      {online !== undefined && (
        <span className={`${styles.status} ${online ? styles.online : styles.offline}`} />
      )}
    </div>
  );
};

export default Avatar;
