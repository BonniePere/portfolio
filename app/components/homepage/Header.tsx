import Container from '../Container';
import headerImage from '../../assets/header.jpg';

const Header = () => {
  return (
    <header
      style={{ backgroundImage: `url(${headerImage.src})` }}
      className="bg-fill bg-fixed bg-center"
    >
      <Container>
        <main className="grid place-items-center h-[30rem] text-center">
          <article className="grid gap-2 text-white">
            <span className="uppercase">Interior Decorator</span>
            <h1
              className={`p-8 md:p-5 blur-0 text-5xl md:text-5xl flex flex-col md:flex-row gap-1 md:gap-8 uppercase leading-[25px] font-bold`}
            >
              <span>Inspiration</span>
              <span>&middot;</span>
              <span>Balance</span>
              <span>&middot;</span>
              <span>Harmony</span>
            </h1>
          </article>
        </main>
      </Container>
    </header>
  );
};

export default Header;
