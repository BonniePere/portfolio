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
        <div className="bg-white text-primary-100 text-xl rounded border-white py-2 justify-center items-center px-4 uppercase">
          <span>Bennie Perez</span>
        </div>
      </Link>
    </span>
  );
};

export default Logo;
