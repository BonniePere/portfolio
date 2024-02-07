'use client';

import React from 'react';
import Container from '../components/Container';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <section className="min-h-screen">
      <Container>
        <div className="">
          <article className="py-5 grid gap-2">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore nostrum eius.
            </p>
          </article>

          <div className="flex"></div>

          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          ></LightGallery>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
