import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import galleryImage from '../../assets/gallery.jpg';
import { BiBox } from 'react-icons/bi';

const Gallery = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[30rem] bg-white">
      <div className="grid place-items-center h-full">
        <article className="flex gap-8 md:gap-10 md:py-20 py-10 flex-col items-start justify-center p-5 md:p-0">
          <h3 className="text-4xl md:text-5xl">Gallery</h3>
          <p className="max-w-[100%] md:max-w-[50ch] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque
            laboriosam laborum amet molestias aspernatur?
          </p>
          <Button size="md" colorScheme="primary" variation="fill">
            View gallery
          </Button>
        </article>
      </div>

      <figure className="relative h-[20rem] md:h-[35rem]">
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] text-white text-5xl opacity-50">
          <BiBox />
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

export default Gallery;
