import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex  w-full flex-col items-center overflow-y-auto pt-6 text-white md:pt-16 xl:flex-row xl:items-end xl:gap-[400px] xl:pb-32 xl:pt-0 ">
      <div className="xl: flex flex-col xl:h-full xl:max-h-96 xl:w-[450px] xl:justify-between">
        <h1 className="flex flex-col text-center font-barlow_condensed uppercase leading-5 tracking-[2.7px] text-[#D0D6F9] md:text-xl md:tracking-[3.38px] xl:text-left xl:text-[28px] xl:tracking-[4.72px] ">
          So, you want to travel to
          <span className="py-4 font-bellefair text-[80px] leading-[105px] text-white md:py-10 md:text-[150px] xl:mt-5">
            Space
          </span>
        </h1>
        <p className="mb-20 text-center font-barlow text-[15px] leading-6 text-[#D0D6F9] md:mb-40 md:px-[122px] md:text-base xl:mb-0 xl:px-0 xl:text-left xl:text-[18px] xl:leading-8 ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="group relative z-0 ">
        <Link
          href="/destination"
          className="relative z-10 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-bellefair text-xl tracking-[1.25px] text-[#0B0D17] md:h-[242px] md:w-[242px] md:text-[32px] md:tracking-[2px] xl:h-[274px] xl:w-[274px]"
        >
          EXPLORE
        </Link>
        <div className=" bg-white opacity-0 xl:absolute xl:inset-0 xl:rounded-full xl:transition-transform xl:duration-700 xl:ease-in-out xl:group-hover:scale-[1.64] xl:group-hover:opacity-10"></div>
      </div>
    </div>
  );
};
export default Home;
