import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import React, { useState } from 'react';
import styles from '../styles/dropdown.module.scss';
import Dropdown from './Dropdown';
import Image from 'next/image';
import { Search } from '../components/Search';
import { useGlobalContext } from '../context';

//koristi se samo ovde

const Navlinks = ({ height }) => {
  const { links } = useGlobalContext();
  return (
    <div
      className={` ${
        height ? 'fixed top-0 left-0 right-0 bg-gray-100   z-50 shadow-md' : ''
      }  flex gap-8 px-6 py-4  items-center justify-center rounded-sm`}
    >
      {height && <Image src='/kuce.svg' alt='kuce' width={40} height={40} />}
      <div
        className={` ${styles.menu} flex items-center justify-center gap-0.5 relative  `}
      >
        <Link href='/moj_ljubimac'>
          <a
            className={`text-slate-700 hover:text-gray-100 select-none whitespace-nowrap${
              height && 'hover:text-slate-500'
            }`}
          >
            мој љубимац{' '}
          </a>
        </Link>
        <span
          id={styles.chevron}
          className={`text-slate-700 hover:text-gray-100 select-none ${
            height && 'hover:text-slate-500'
          }`}
        >
          <FaChevronRight />
        </span>
        <Dropdown />
      </div>

      {links.map((link, i) => (
        <Link key={i} href={link.href}>
          <a
            className={`select-none whitespace-nowrap hover:text-gray-100 ${
              height && 'hover:text-slate-500'
            } `}
          >
            {link.name}
          </a>
        </Link>
      ))}
      <Link href='/akcije'>
        <a className='text-slate-50 py-1 px-2 hover:bg-red-400 rounded-sm select-none bg-red-600'>
          акције
        </a>
      </Link>
      <Search />
    </div>
  );
};

export default Navlinks;
