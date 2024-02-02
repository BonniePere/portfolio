import Logo from '../components/Logo';
import Image from 'next/image';
import avatarImage from '../assets/about.jpg';
import Container from '../components/Container';
import Button from '../components/Button';

const page = () => {
  return (
    <section>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <figure className="relative h-[25rem] md:h-[35rem]">
            <span className="absolute top-[80%] left-[50%] translate-x-[-50%] p-2 bg-black text-white text-5xl opacity-50">
              <span className="hidden md:block">
                <Logo size={2} />
              </span>
              <span className="block md:hidden">
                <Logo size={1.2} />
              </span>
            </span>
            <Image
              className="w-full h-full object-cover"
              src={avatarImage}
              alt=""
            />
          </figure>

          <form
            action=""
            className="text-center flex flex-col justify-center py-10 px-10"
          >
            <h2 className="text-2xl text-center ">
              Contact Bonnie Perez to discuss your interior design need.
            </h2>

            <div className="grid">
              <Button
                type="submit"
                variation="fill"
                size="md"
                colorScheme="primary"
              >
                {' '}
                Let&apos;s talk
              </Button>
            </div>
          </form>
        </section>
      </Container>
    </section>
  );
};

export default page;
