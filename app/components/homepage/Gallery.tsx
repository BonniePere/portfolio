import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import galleryImage from '../../assets/gallery.jpg';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[30rem] bg-white">
      <div className="grid place-items-center h-full">
        <article className="flex gap-8 md:gap-10 md:py-20 py-10 flex-col items-start justify-center p-5 md:px-5">
          <h3 className="text-4xl md:text-5xl max-w-[15ch]">
            Gallery: A Glimpse into My Work
          </h3>
          <p className="max-w-[100%] md:max-w-[50ch] text-gray-500">
            Welcome to a world where function meets style, and every space tells
            a story. This gallery showcases a selection of my interior design
            projects, each meticulously crafted to reflect my client&apos;s
            unique vision and personality.
          </p>
          <Link href="/gallery">
            <Button size="md" colorScheme="primary" variation="fill">
              View gallery
            </Button>
          </Link>
        </article>
      </div>

      <figure className="relative h-[20rem] md:h-[35rem]">
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
