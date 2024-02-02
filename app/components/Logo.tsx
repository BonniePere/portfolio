import { Sacramento } from 'next/font/google';
import Link from 'next/link';
const architects_daughter = Sacramento({
  subsets: ['latin'],
  weight: '400',
});

interface Props {
  size?: number;
}

const Logo = ({ size }: Props) => {
  return (
    <span className={architects_daughter.className}>
      <Link href="/">
        <div
          style={{
            fontSize: `${size || 2}rem`,
          }}
          className="text-white justify-center items-center"
        >
          <span>BenniePerez</span>
        </div>
      </Link>
    </span>
  );
};

export default Logo;
