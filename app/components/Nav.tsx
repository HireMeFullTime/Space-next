'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '../utils/navlinks';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden  h-full w-full max-w-[500px] items-center justify-center  bg-[#FFFFFF0A] font-barlow_condensed text-sm tracking-[2.36px] text-white backdrop-blur-2xl supports-[not(backdrop-filter:blur(1px))]:bg-[#1c1a26] md:flex xl:max-w-[830px]  xl:text-base xl:tracking-[2.7px]">
      <ul className="relative flex h-full gap-9 xl:gap-12 ">
        {navLinks.map((item) => (
          <li key={item.id} className="relative flex h-full items-center">
            <Link href={item.href} className="peer flex gap-3">
              <span className="hidden font-bold xl:block">{item.id}</span>
              {item.name}
            </Link>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/50 opacity-0 peer-hover:opacity-100" />

            {pathname === item.href && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white" />
            )}
          </li>
        ))}

        <div
          className="absolute -left-[503px]  top-2/4 hidden h-[1px] w-full
        max-w-[473px]   bg-[#ffffff40]
        xl:block"
        />
      </ul>
    </nav>
  );
};
export default Nav;
