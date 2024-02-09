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
  {
    id: 1,
    icon: <FaXTwitter />,
    path: 'https://x.com/bonnieperezds?t=TWT5uaDfhERGLGNuABeViA&s=09',
  },
  {
    id: 2,
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/profile.php?id=61553274376677&mibextid=ZbWKwL',
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/bonnie-perez-485ab51b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 4,
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/bonnieperezds?igsh=MTVkNXY4N25zYWx1NQ==',
  },
];

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[30rem] bg-white">
      <div className="grid place-items-center h-full">
        <article className="flex gap-5 md:gap-10 py-10 flex-col items-start justify-center p-5 md:px-5">
          <h3 className="text-4xl md:text-5xl max-w-[15ch]">
            Crafting Stories in Space: About Me
          </h3>
          <p className="max-w-[100%] md:max-w-[50ch] text-gray-500">
            My journey in interior design started with a spark of inspiration, a
            fascination with how objects and colors could shape emotions and
            experiences. With years of experience and a relentless pursuit of
            knowledge, I&apos;ve honed my skills to craft spaces that are not
            just aesthetically pleasing but also deeply functional and
            emotionally resonant.
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
        <span className="absolute top-[4%] left-[4%] p-2 bg-black text-white text-5xl opacity-50">
          <span className="hidden md:block">
            <Logo size={1.2} />
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
