import React from 'react';
import Image from 'next/image';
import galleryImage from '../../assets/services.jpg';

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[30rem] bg-white">
      <figure className="relative h-[20rem] md:h-[35rem] order-2 md:order-1">
        <Image
          className="w-full h-full object-cover"
          src={galleryImage}
          alt=""
        />
      </figure>

      <div className="grid place-items-center h-full bg-primary-100 text-white order-1 md:order-2">
        <article className="flex gap-8 md:gap-10 py-10 flex-col items-start justify-center p-5 md:p-0">
          <h3 className="text-4xl md:text-5xl">Services</h3>
          <article className="grid gap-5 text-[#666]">
            <p className="max-w-[100%] md:max-w-[50ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequatur amet similique vel molestias quisquam cupiditate est
            </p>
            <p className="max-w-[100%] md:max-w-[50ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequatur amet similique vel molestias quisquam cupiditate est
            </p>
          </article>
        </article>
      </div>
    </section>
  );
};

export default Services;
