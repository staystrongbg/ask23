import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
const BreadcrumbExample = () => {
  const router = useRouter();
  const pathSnippets = router.asPath.split('/').filter((i) => i);
  const [disabled, setDisabled] = useState(pathSnippets.length - 1);

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
        <a className={` ${disabled === idx && 'pointer-events-none  '} `}>
          <span className='mr-2'>/</span>{' '}
          <span className={` ${disabled === idx && 'text-gray-400  '} `}>
            {snippet}
          </span>
        </a>
      </Link>
    );
  });
  return (
    <div className='breadcrumbs sm:w-4/5 w-full m-auto pt-20'>
      <p className='sm:text-sm text-xs italic  text-gray-400 px-2 '>
        Ви сте овде
      </p>
      <div className=' sm:text-base text-sm flex gap-2 text-gray-600 uppercase cursor-pointer border-b border-gray-300 p-2 '>
        <Link href='/'>
          <a>почетна</a>
        </Link>
        {urls.map((url) => url)}
      </div>
    </div>
  );
};

export default BreadcrumbExample;
