import Logo from './Logo';
import Container from './Container';
import NavList from './NavList';

const NavBar = () => {
  return (
    <nav className="">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Logo />

          <NavList />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
