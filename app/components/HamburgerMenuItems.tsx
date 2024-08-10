import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import close_icon from '../assets/close_icon.png';
import { navLinks } from '../utils/navlinks';

interface MenuItemsProps {
  closeMenu: () => void;
}

const HamburgerMenuItems: React.FC<MenuItemsProps> = ({ closeMenu }) => {
  const pathname = usePathname();
  return (
    <nav className="animate-slide-in fixed right-0 top-0 z-[100] flex h-screen w-64 max-w-64 flex-col gap-16 overflow-y-auto bg-white/5 pl-8 pr-0 pt-8 text-white  backdrop-blur-xl supports-[not(backdrop-filter:blur(1px))]:bg-[#1c1a26]">
      <button onClick={closeMenu} className="self-end pr-7">
        <Image src={close_icon} alt="Close icon" width={20} height={20} />
      </button>
      <ul>
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
