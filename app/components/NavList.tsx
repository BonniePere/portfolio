'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Button from './Button';
import { usePathname } from 'next/navigation';

const list = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Gallery', path: '/gallery' },
  { id: 3, label: 'Contact', path: '/contact' },
];

const NavList = () => {
  const [showNav, setShowNav] = useState(false);
  const path = usePathname();

  return (
    <>
      <div className="flex gap-10 items-center justify-items-center">
        <ul className="hidden md:flex items-center gap-5">
          {list.map((item) => (
            <li
              key={item.id}
              className={`transition-all ${
                path === item.path ? 'text-white' : 'text-[#666]'
              } hover:text-white`}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="hidden md:block">
          <Button
            variation="fill"
            colorScheme="light"
            size="md"
            type="button"
            title="contact"
          >
            Let&apos;s talk
          </Button>
        </Link>
      </div>

      <div className="flex relative md:hidden items-center justify-stretch">
        <button
          type="button"
          title="menu-toggler"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <Cross1Icon width="25px" height="25px" />
          ) : (
            <HamburgerMenuIcon width="25px" height="25px" />
          )}
        </button>

        {showNav && (
          <div className="fixed top-0 right-0 z-20 border w-full h-screen bg-primary-100 p-5">
            <div className="text-right">
              <button
                type="button"
                title="menu-toggler"
                onClick={() => setShowNav(!showNav)}
              >
                {showNav ? (
                  <Cross1Icon width="25px" height="25px" />
                ) : (
                  <HamburgerMenuIcon width="25px" height="25px" />
                )}
              </button>
            </div>
            <ul className="flex flex-col items-start justify-center h-full gap-5 px-5 -mt-10">
              {list.map((item) => (
                <li
                  key={item.id}
                  className={`transition-all text-5xl  ${
                    path === item.path ? 'text-white' : 'text-[#666]'
                  } hover:text-white`}
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}

              <Link href="/contact" className="mt-5">
                <Button
                  variation="fill"
                  colorScheme="light"
                  size="md"
                  type="button"
                  title="contact"
                >
                  Let&apos;s talk
                </Button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavList;
