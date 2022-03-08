import Link from 'next/link';
import { FaDog, FaCat, FaKiwiBird, FaFish } from 'react-icons/fa';
import FaMouse from './FaMouse';
import styles from '../styles/dropdown.module.scss';

const mojljubimac = ['psi,mace,ptice,ribice,glodari'];

export default function Dropdown() {
  const ICON_STYLE =
    'bg-gray-50 rounded-full w-8 h-8 items-center justify-center flex ';

  const mouseStyle = () => {
    return `bg-gray-50 rounded-full w-8 h-8 items-center justify-center flex  -scale-x-100`;
  };
  const mouse = mouseStyle();

  return (
    <div className={` ${styles.nav__dropdown}`}>
      <Link href='/moj_ljubimac/psi'>
        <a>
          <span className={ICON_STYLE}>
            <FaDog />
          </span>
          kuce
        </a>
      </Link>
      <Link href='/moj_ljubimac/mace'>
        <a>
          <span className={ICON_STYLE}>
            <FaCat />
          </span>
          mace
        </a>
      </Link>
      <Link href='/moj_ljubimac/mace'>
        <a>
          <span className={ICON_STYLE}>
            <FaKiwiBird />
          </span>
          ptice
        </a>
      </Link>
      <Link href='/moj_ljubimac/mace'>
        <a>
          <span className={ICON_STYLE}>
            <FaFish />
          </span>
          ribice
        </a>
      </Link>
      <Link href='/moj_ljubimac/mace'>
        <a>
          <span className={mouse}>
            <FaMouse />
          </span>
          glodari
        </a>
      </Link>
    </div>
  );
}
