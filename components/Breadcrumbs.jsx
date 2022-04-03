import Link from 'next/link';
import { useRouter } from 'next/router';
const BreadcrumbExample = () => {
  const router = useRouter();

  const pathSnippets = router.asPath.split('/').filter((i) => i);

  const urls = pathSnippets.map((snippet, idx) => {
    const url = `/${snippet}`;
    if (snippet === 'proizvodi') snippet = 'производи';
    if (snippet === 'brendovi') snippet = 'брендови';
    if (snippet === 'o-nama') snippet = 'о нама';
    if (snippet === 'kontakt') snippet = 'контакт';
    if (snippet === 'akcije') snippet = 'акције';
    if (snippet === 'psi') snippet = 'пси';
    if (snippet === 'macke') snippet = 'мачке';
    if (snippet === 'ptice') snippet = 'птице';
    if (snippet === 'akvaristika') snippet = 'акваристика';
    if (snippet === 'male-zivotinje') snippet = 'мале животиње';
    if (snippet.includes('#')) return snippet.slice(0, 1);
    return (
      <Link key={idx} href={url}>
        <a>
          <span className='mr-2'>/</span> {snippet}
        </a>
      </Link>
    );
  });
  return (
    <div className='breadcrumbs w-4/5 m-auto text-base flex gap-2 text-gray-500 uppercase cursor-pointer border-b border-gray-300 p-2'>
      <Link href='/'>
        <a>почетна</a>
      </Link>
      {urls.map((url) => url)}
    </div>
  );
};

export default BreadcrumbExample;

// { href: '/', name: 'почетна' },
// { href: '/brendovi', name: 'брендови' },
// { href: '/o-nama', name: 'о нама' },
// { href: '/kontakt', name: 'контакт' },

// const breadcrumbNameMap = {
//   '/': 'почетна',
//   '/proizvodi': 'производи',
//   '/brendovi': 'брендови',
//   '/o-nama': 'о нама',
//   '/kontakt': 'контакт',
//   '/akcije': 'акције',
//   '/psi': 'пси',
//   '/macke': 'мачке',
//   '/ptice': 'птице',
//   '/akvaristika': 'акваристика',
//   '/male-zivotinje': 'мале животиње',
// };

// const cir_url = Object.values(breadcrumbNameMap);
// console.log(cir_url);
