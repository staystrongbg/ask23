import styles from '../styles/sidebar.module.scss';
import stylesDropdown from '../styles/dropdown.module.scss';

import Link from 'next/link';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { Search } from './Search';
const Sidebar = ({ links, setShowSidebar }) => {
  return (
    <div className={styles['sidebar']}>
      <FaTimes
        className='absolute top-4 right-4 cursor-pointer'
        onClick={() => setShowSidebar(false)}
      />
      <ul className={styles['sidebar-links']}>
        {/* <Search /> */}
        <Link href='/proizvodi'>
          <a
            className={`text-slate-700 tracking-wider border-b-4 border-transparent hover:border-b-4 hover:border-red-400 select-none whitespace-nowrap hover:text-slate-500'
          }`}
          >
            мој љубимац{' '}
          </a>
        </Link>

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
        <Link href='/akcije'>
          <a className='text-slate-50 py-1 px-2 tracking-wider hover:bg-red-400 rounded-sm select-none bg-red-600'>
            акције
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
