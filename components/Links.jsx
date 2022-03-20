import Link from 'next/link';
import { useGlobalContext } from '../context';

const Links = ({ text_color }) => {
  const { links } = useGlobalContext();
  return (
    <>
      {links.map((link, i) => (
        <Link key={i} href={link.href}>
          <a
            className={`select-none whitespace-nowrap ${text_color} border-b-4 border-transparent w-fit hover:border-orange-600   
               `}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </>
  );
};

export default Links;
