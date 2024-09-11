import PageTitle from '../components/PageTitle';
import TechnologyCarousel from '../components/TechnologyCarousel';

const Technology = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-y-auto">
      <div className="pl-10 md:self-start">
        <PageTitle number="03" text="SPACE LAUNCH 101" />
      </div>
      <TechnologyCarousel />
    </div>
  );
};
export default Technology;
