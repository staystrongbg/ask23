import Link from 'next/link';
import { useRouter } from 'next/router';
const BreadcrumbExample = () => {
  const router = useRouter();
  return (
    <div className='breadcrumbs w-4/5 m-auto text-base flex gap-2 text-gray-500 uppercase cursor-pointer border-b border-gray-300 p-2'>
      <Link href='/'>
        <a>почетна</a>
      </Link>
      {router.asPath
        .split('/')
        .slice(1)
        .map((link, key) => {
          if (link === 'proizvodi') link = 'производи';
          if (link === 'brendovi') link = 'брендови';
          if (link === 'o_nama') link = 'о нама';
          if (link === 'kontakt') link = 'контакт';
          if (link === 'akcije') link = 'акције';
          if (link === 'psi') link = 'пси';
          if (link === 'macke') link = 'мачке';
          if (link === 'ptice') link = 'птице';
          if (link === 'akvaristika') link = 'акваристика';
          if (link === 'male-zivotinje') link = 'мале животиње';

          return (
            <p key={key} onClick={() => router.back()} className=''>
              {link && <span className='mx-2'>/</span>} {link}
            </p>
          );
        })}
    </div>
  );
};

export default BreadcrumbExample;

// { href: '/', name: 'почетна' },
// { href: '/brendovi', name: 'брендови' },
// { href: '/o-nama', name: 'о нама' },
// { href: '/kontakt', name: 'контакт' },
