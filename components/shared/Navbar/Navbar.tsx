import { navlinks } from '@/lib/const';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden w-full items-center justify-between md:flex">
      <div>LOGO</div>
      <div className="flex w-1/2 justify-between">
        {navlinks.map((link) => (
          <Link
            className="hover:text-primary underline-offset-10 transition-all hover:underline"
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={'tel:+989370814221'}
          className="bg-primary block cursor-pointer rounded-full p-1.5 text-white"
        >
          <PhoneCall strokeWidth={1} direction={'rtl'} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
