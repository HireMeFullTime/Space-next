import CrewCarousel from '../components/CrewCarousel';
import PageTitle from '../components/PageTitle';

const Crew = () => {
  return (
    <div className="w-full flex flex-col items-center  overflow-hidden">
      <PageTitle number={'02'} text={'Meet your crew'} />
      <CrewCarousel />
    </div>
  );
};

export default Crew;
