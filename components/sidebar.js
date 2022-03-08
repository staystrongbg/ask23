import styles from '../styles/sidebar.module.scss';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
const Sidebar = ({ links, setShowSidebar }) => {
  return (
    <div className={styles['sidebar']}>
      <FaTimes
        className='absolute top-4 right-4 cursor-pointer'
        onClick={() => setShowSidebar(false)}
      />
      <ul className={styles['sidebar-links']}>
        {links.map((link, idx) => (
          <li
            className={styles['sidebar-link']}
            key={idx}
            onClick={() => setShowSidebar(false)}
          >
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
