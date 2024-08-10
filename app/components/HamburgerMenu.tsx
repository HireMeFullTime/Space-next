'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import HamburgerMenuItems from './HamburgerMenuItems';
import hamburger_icon from '../assets/hamburger.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);
  return (
    <div className="pb-2 md:hidden">
      <button onClick={openMenu}>
        <Image
          src={hamburger_icon}
          alt="hamburger menu icon"
          width={24}
          height={21}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 overflow-y-auto"
            onClick={closeMenu}
          />
          <HamburgerMenuItems closeMenu={closeMenu} />
        </>
      )}
    </div>
  );
};
export default HamburgerMenu;
