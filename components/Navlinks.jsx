import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import React, { useState } from 'react';
import styles from '../styles/dropdown.module.scss';
import Dropdown from './Dropdown';
import Image from 'next/image';
import { useGlobalContext } from '../context';
import Topbar from './Topbar';

//koristi se samo ovde

const Navlinks = () => {
  const { links, height } = useGlobalContext();
  return (
    <>
      <div
        className={` ${
          height
            ? 'fixed top-[48px] left-0 right-0 bg-gray-100/90   z-50 shadow-md'
            : ''
        }  flex gap-8 px-6 py-4  items-center justify-center rounded-sm uppercase`}
      >
        {height && (
          <Image src='/asklogo.svg' alt='kuce' width={120} height={60} />
        )}
        <div
          className={` ${styles.menu} flex items-center justify-center gap-0.5 relative  `}
        >
          <Link href='/moj_ljubimac'>
            <a
              className={`text-gray-900 tracking-wider select-none whitespace-nowrap}`}
            >
              мој љубимац{' '}
            </a>
          </Link>
          <span
            id={styles.chevron}
            className={`text-gray-900 hover:text-gray-600 select-none ${
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
              className={`select-none whitespace-nowrap text-gray-900 border-b-4 border-transparent hover:border-orange-600   
               `}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <Link href='/akcije'>
          <a className='text-slate-50 py-1 px-2 tracking-wider rounded-sm select-none bg-[#733e00]'>
            акције
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navlinks;
