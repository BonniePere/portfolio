'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

const list = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Gallery', path: '/gallery' },
  { id: 3, label: 'Contact', path: '/contact' },
];

const NavList = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <ul className="hidden md:flex items-center gap-5">
        {list.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex relative md:hidden items-center justify-stretch">
        <button
          type="button"
          title="menu-toggler"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>

        {showNav && (
          <div className="fixed top-0 right-0 z-20 border  w-full h-screen bg-white p-5">
            <div className="text-right">
              <button
                type="button"
                title="menu-toggler"
                onClick={() => setShowNav(!showNav)}
              >
                {showNav ? (
                  <Cross1Icon width="25px" height="25px" />
                ) : (
                  <HamburgerMenuIcon />
                )}
              </button>
            </div>

            <ul className="flex flex-col items-center justify-center h-full gap-5">
              {list.map((item) => (
                <li key={item.id} className="text-4xl">
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavList;
