import { Architects_Daughter } from 'next/font/google';
import Link from 'next/link';
const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

const Logo = () => {
  return (
    <span className={architects_daughter.className}>
      <Link href="/">
        <div className="border text-xl border-white py-2 justify-center items-center px-5">
          <span>Bennie Perez Design</span>
        </div>
      </Link>
    </span>
  );
};

export default Logo;
