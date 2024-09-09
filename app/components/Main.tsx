'use client';

import { usePathname } from 'next/navigation';

import { getBackgroundClasses } from '../utils/background';

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const backgroundClasses = getBackgroundClasses(pathname);
  return (
    <main
      className={`
      ${
        pathname === '/technology' &&
        'flex min-h-screen overflow-y-hidden px-0 pt-[88px] md:px-0 md:pb-0  md:pt-[136px]  xl:pl-[166px] xl:pr-0 xl:pt-[212px]'
      }
      ${backgroundClasses}
     bg-cover 
      ${
        pathname !== '/technology' &&
        'flex  min-h-screen w-full  justify-center overflow-y-hidden p-6 pt-[88px] md:px-10 md:pb-0   md:pt-[136px] xl:pb-0 xl:pl-[166px] xl:pr-0 xl:pt-[212px] '
      }
      ${pathname==='/crew' && 'pb-0'}
    `}
    >
      {children}
    </main>
  );
};

export default Main;
