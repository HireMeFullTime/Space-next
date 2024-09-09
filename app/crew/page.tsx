import CrewCarousel from '../components/CrewCarousel';
import PageTitle from '../components/PageTitle';

const Crew = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-y-auto">
      <PageTitle number="02" text="Meet your crew" />
      <CrewCarousel />
    </div>
  );
};

export default Crew;
