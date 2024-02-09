'use client';

import Container from '../components/Container';
import PhotoGallery from './photoGallery';

const Gallery = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="grid gap-10 py-10">
          <article className="py-5 grid gap-4">
            <h1 className="text-4xl font-bold">
              Gallery: A Glimpse into My Work
            </h1>
            <p>
              Welcome to a world where function meets style, and every space
              tells a story. This gallery showcases a selection of my interior
              design projects, each meticulously crafted to reflect my
              client&apos;s unique vision and personality.
            </p>
          </article>

          <PhotoGallery />
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
