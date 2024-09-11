import EmblaCarousel from '../components/TechnologyCarousel';
import PageTitle from '../components/PageTitle';
import TechnologyCarousel from '../components/TechnologyCarousel';

const Technology = () => {
  return (
    <div className="w-full overflow-y-auto flex flex-col items-center">
      <PageTitle number="03" text="SPACE LAUNCH 101" />
      <EmblaCarousel />
    </div>
  );
};
export default Technology;
