import Link from 'next/link';
import { Sacramento } from 'next/font/google';
const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
});

interface Props {
  size?: number;
}

const Logo = ({ size }: Props) => {
  return (
    <span className={sacramento.className}>
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
