import React, { useState } from 'react';
import { galleryData, imagesList } from '../utils/data';
import Image from 'next/image';
import { BsX } from 'react-icons/bs';
import { MdOutlineSwipeRight } from 'react-icons/md';

const PhotoGallery = () => {
  const [toggler, setToggler] = useState(false);
  const [currentImageSet, setCurrentImageSet] = useState<any[]>(
    imagesList[0].list
  );
  return (
    <section>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {galleryData.map((data) => (
          <figure
            onClick={() => {
              const found = imagesList.find((image) => image.id === data.id);
              setToggler(true);
              if (found) setCurrentImageSet(found?.list);
            }}
            key={data.id}
            className="border relative cursor-pointer group"
          >
            <span className="absolute top-0 left-0 w-full h-full grid place-items-center text-3xl transition-all text-center text-white bg-[rgba(3,3,3,.7)] group-hover:bg-[rgba(3,3,3,.8)]">
              <h1 className="max-w-[20ch]">{data.title}</h1>
            </span>
            <Image
              className="w-full h-full object-cover"
              src={data.cover}
              alt={data.title}
            />
          </figure>
        ))}
      </div>

      {toggler && (
        <div className="grid fixed top-0 left-0 w-screen h-screen bg-black">
          <nav className="text-5xl text-red-400 flex justify-end items-center w-[97%]">
            <BsX className="cursor-pointer" onClick={() => setToggler(false)} />
          </nav>

          <div className="flex w-screen h-full overflow-x-auto">
            {currentImageSet.map((image, index) => (
              <Image
                key={index}
                className="mr-2 flex-shrink-0 w-[max-content] h-full object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>

          <div className="flex items-center justify-center text-4xl py-4 text-white">
            <MdOutlineSwipeRight />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
