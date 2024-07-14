import Image from 'next/image';
import Link from 'next/link';

import HamburgerMenu from './HamburgerMenu';
import Nav from './Nav';
import logoMobile from '../assets/logo_mobile.png';
import logoTablet from '../assets/logo_tablet.png';

const Header = () => {
  return (
    <header className="fixed  top-0 z-10 flex h-16 w-full max-w-[1440px] items-end justify-between  px-6 md:h-24 md:items-center md:pl-10 md:pr-0 xl:top-10 xl:pl-14">
      <Link href="/" className="md:hidden">
        <Image src={logoMobile} alt="logo" width={40} height={40} />
      </Link>
      <Link href="/" className="xs:hidden md:block ">
        <Image src={logoTablet} alt="logo" width={48} height={48} />
      </Link>

      <HamburgerMenu />
      <Nav />
    </header>
  );
};
export default Header;
