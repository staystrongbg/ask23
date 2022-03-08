import Link from 'next/link';
import { FaDog, FaCat, FaKiwiBird, FaFish } from 'react-icons/fa';
import FaMouse from './FaMouse';
import styles from '../styles/dropdown.module.scss';

export default function Dropdown() {
  const ICON_STYLE =
    'bg-gray-50 rounded-full w-8 h-8 items-center justify-center flex ';

  const mouseStyle = () => {
    return `bg-gray-50 rounded-full w-8 h-8 items-center justify-center flex  -scale-x-100`;
  };
  const mouse = mouseStyle();

  const Fadog = () => <FaDog />;
  const Facat = () => <FaCat />;
  const Fabird = () => <FaKiwiBird />;
  const Fafish = () => <FaFish />;
  const Famouse = () => <FaMouse mouse={mouse} />;

  const mojljubimac = [
    { name: 'пси', comp: Fadog, link: '/moj_ljubimac/psi' },
    { name: 'мачке', comp: Facat, link: '/moj_ljubimac/macke' },
    { name: 'птице', comp: Fabird, link: '/moj_ljubimac/ptice' },
    { name: 'акваристика', comp: Fafish, link: '/moj_ljubimac/akvaristika' },
    {
      name: 'мале животиње',
      comp: Famouse,
      link: '/moj_ljubimac/male_zivotinje',
    },
  ];

  return (
    <div className={` ${styles.nav__dropdown}`}>
      {mojljubimac.map((lj, idx) => (
        <Link key={idx} href={lj.link}>
          <a>
            <span className={ICON_STYLE}>{lj.comp()}</span>
            {lj.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
