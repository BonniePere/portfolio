import Header from './components/homepage/Header';
import SectionOne from './components/homepage/SectionOne';
import Gallery from './components/homepage/Gallery';
import Services from './components/homepage/Services';
import About from './components/homepage/About';

export default function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Services />
      <About />
    </>
  );
}
