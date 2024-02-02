import Container from '../Container';
import headerImage from '../../assets/header.jpg';
import { Architects_Daughter } from 'next/font/google';

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <header
      style={{ backgroundImage: `url(${headerImage.src})` }}
      className="bg-fill bg-fixed bg-bottom"
    >
      <Container>
        <main className="grid place-items-center h-screen md:h-[40rem] text-center">
          <h1
            className={`p-8 md:p-5 blur-0 text-5xl md:text-5xl capitalize text-white flex flex-col md:flex-row gap-2 md:gap-8  ${architects_daughter.className}`}
          >
            <span>Inspiration</span> <span>Balance</span> <span>Harmony</span>
          </h1>
        </main>
      </Container>
    </header>
  );
};

export default Header;
