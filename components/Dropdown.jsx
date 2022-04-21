import Link from 'next/link';
import { FaDog, FaCat, FaKiwiBird, FaFish } from 'react-icons/fa';
import { GiHummingbird } from 'react-icons/gi';
import FaMouse from './FaMouse';
import styles from '../styles/dropdown.module.scss';
import { ICON_STYLE } from './utils';

export default function Dropdown() {
  const mouseStyle = () =>
    `bg-gray-50 rounded-full w-5 h-5 mx-4 object-contain items-center justify-center flex  `;

  const mouse = mouseStyle();

  const Fadog = () => <FaDog />;
  const Facat = () => <FaCat />;
  const Fabird = () => <GiHummingbird />;
  const Fafish = () => <FaFish />;
  const Famouse = () => <FaMouse mouse={mouse} />;

  const mojljubimac = [
    { name: 'пси', comp: Fadog, link: 'psi' },
    { name: 'мачке', comp: Facat, link: 'macke' },
    { name: 'птице', comp: Fabird, link: 'ptice' },
    { name: 'акваристика', comp: Fafish, link: 'akvaristika' },
    {
      name: 'глодари',
      comp: Famouse,
      link: 'glodari',
    },
  ];

  return (
    <div className={` ${styles.nav__dropdown}`}>
      {mojljubimac.map((lj, idx) => (
        <Link key={idx} href={`/${lj.link}`}>
          <a>
            <span className={ICON_STYLE}>{lj.comp()}</span>
            {lj.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
