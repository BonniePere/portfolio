'use client';

import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import moment from 'moment';
import Container from './Container';

import {
  FaXTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const navigationList = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Gallery', path: '/gallery' },
  { id: 3, label: 'Contact', path: '/contact' },
];

const contactList = [
  { id: 1, path: '+2347000000000', prefix: 'tel:' },
  { id: 2, path: 'someone@somewhere.com', prefix: 'mailto:' },
];

const socialList = [
  { id: 1, icon: <FaXTwitter />, path: '' },
  { id: 2, icon: <FaFacebook />, path: '' },
  { id: 3, icon: <FaLinkedinIn />, path: '' },
  { id: 4, icon: <FaInstagram />, path: '' },
];

const Footer = () => {
  const path = usePathname();

  return (
    <footer className="bg-primary-100 pt-10 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40fr_20fr_20fr_20fr] gap-10">
          <div className="grid gap-5">
            <div className="flex">
              <Logo />
            </div>

            <p className="max-w-[35ch] text-[#fc8f68]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              mollitia esse sunt aliquid! Cumque, animi?
            </p>
          </div>

          <article className="grid gap-4">
            <h3 className="text-lg uppercase">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navigationList.map((item) => (
                <li
                  key={item.id}
                  className={`transition-all ${
                    path === item.path ? 'text-white' : 'text-[#fc8f68]'
                  } hover:text-white`}
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="grid gap-4">
            <h3 className="text-lg uppercase">Socials</h3>
            <ul className="flex flex-col gap-3">
              {socialList.map((item) => (
                <li
                  key={item.id}
                  className="text-[#fc8f68] hover:text-white transition-all"
                >
                  <Link href={item.path}>{item.icon}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col gap-4">
            <h3 className="text-lg uppercase mb-0">Contact</h3>
            <ul className="flex flex-col gap-2 justify-start">
              {contactList.map((item) => (
                <li
                  key={item.id}
                  className="text-[#fc8f68] hover:text-white transition-all"
                >
                  <Link href={item.prefix + item.path}>{item.path}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="text-center border-t border-[#fc8f68] text-[#fc8f68] py-5 mt-10">
          Copyright &copy; {moment().format('Y')} - Bonnie M. Perez
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
