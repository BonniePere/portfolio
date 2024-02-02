import Logo from '../components/Logo';
import Image from 'next/image';
import avatarImage from '../assets/about.jpg';
import Container from '../components/Container';
import Button from '../components/Button';

const page = () => {
  let inputClasses =
    'border py-3 px-3 bg-slate-100 outline-none focus:border-primary-100';

  return (
    <section>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] py-10 gap-10">
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
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="text-center flex flex-col justify-center py-10 gap-10"
          >
            <h2 className="text-3xl text-center ">
              <strong>Contact Bonnie Perez</strong> to <strong>discuss</strong>{' '}
              your interior <strong>design need</strong>.
            </h2>
            <div className="grid gap-4">
              <input
                className={inputClasses}
                placeholder="Full name"
                type="text"
                name="name"
                required
              />
              <input
                className={inputClasses}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
              <input
                className={inputClasses}
                placeholder="Phone number"
                type="text"
                name="phone-number"
                required
              />
              <textarea
                className={inputClasses}
                placeholder="What project do you need help with?"
                name="what-project-do-you-need-help-with"
                required
              ></textarea>
            </div>
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
