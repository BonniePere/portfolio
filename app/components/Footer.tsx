import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import moment from 'moment';

const list = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Gallery', path: '/gallery' },
  { id: 3, label: 'Contact', path: '/contact' },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40fr_20fr_20fr_20fr] gap-10">
          <div className="grid gap-2">
            <Logo />

            <p className="max-w-[35ch]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              mollitia esse sunt aliquid! Cumque, animi?
            </p>
          </div>

          <article className="grid gap-4">
            <h3 className="text-lg uppercase">Quick links</h3>
            <ul className="flex flex-col gap-3">
              {list.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="grid gap-4">
            <h3 className="text-lg uppercase">Socials</h3>
            <ul className="flex flex-col gap-3">
              {list.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="grid gap-4">
            <h3 className="text-lg uppercase">Contact</h3>
            <ul className="flex flex-col gap-3">
              {list.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="text-center border-t py-5 mt-10">
          Copyright &copy; {moment().format('Y')} - Bonnie M. Perez
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
