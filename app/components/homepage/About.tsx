import React from 'react';

import Image from 'next/image';
import galleryImage from '../../assets/about.jpg';

import {
  FaXTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa6';
import Link from 'next/link';
import Logo from '../Logo';

const socialList = [
  { id: 1, icon: <FaXTwitter />, path: '' },
  { id: 2, icon: <FaFacebook />, path: '' },
  { id: 3, icon: <FaLinkedinIn />, path: '' },
  { id: 4, icon: <FaInstagram />, path: '' },
];

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[30rem] bg-white">
      <div className="grid place-items-center h-full">
        <article className="flex gap-5 md:gap-10 py-10 flex-col items-start justify-center p-5 md:p-0">
          <h3 className="text-4xl md:text-5xl">About</h3>
          <p className="max-w-[100%] md:max-w-[50ch] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque
            laboriosam laborum amet molestias aspernatur?
          </p>

          <ul className="flex gap-3">
            {socialList.map((item) => (
              <li
                key={item.id}
                className="text-[#666] hover:text-primary-100 transition-all"
              >
                <Link href={item.path}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <figure className="relative h-[25rem] md:h-[35rem]">
        <span className="absolute top-[80%] left-[50%] translate-x-[-50%] p-2 bg-black text-white text-5xl opacity-50">
          <span className="hidden md:block">
            <Logo size={2} />
          </span>
          <span className="block md:hidden">
            <Logo size={1.2} />
          </span>
        </span>
        <Image
          className="w-full h-full object-cover"
          src={galleryImage}
          alt=""
        />
      </figure>
    </section>
  );
};

export default About;
