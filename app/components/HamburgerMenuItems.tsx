import Image from 'next/image';
import Link from 'next/link';
import close_icon from '@/public/close_icon.png';
import { usePathname } from 'next/navigation';

import { navLinks } from '../utils/navlinks';

interface MenuItemsProps {
  closeMenu: () => void;
}

const HamburgerMenuItems: React.FC<MenuItemsProps> = ({ closeMenu }) => {
  const pathname = usePathname();
  // overflow-y-auto
  return (
    <nav className="animate-slide-in fixed right-0 top-0 z-[100] flex h-screen w-64 max-w-64 flex-col gap-16  bg-white/5 pl-8 pr-0 pt-8 text-white  backdrop-blur-xl supports-[not(backdrop-filter:blur(1px))]:bg-[#1c1a26]">
      <button onClick={closeMenu} className="self-end pr-7">
        <Image src={close_icon} alt="Close icon" width={20} height={20} />
      </button>
      <ul className='overflow-y-auto'>
        {navLinks.map((item) => (
          <li key={item.id} className="relative pb-8 tracking-[2.7px]">
            <Link
              href={item.href}
              className="font-barlow_condensed"
              onClick={closeMenu}
            >
              <span className="font-bold">{item.id}</span> {item.name}
            </Link>
            {pathname === item.href && (
              <div className="absolute right-0 top-[calc(50%-50%)] h-5 w-1 bg-white" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HamburgerMenuItems;
