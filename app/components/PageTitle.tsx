const PageTitle = ({ number, text }: { number: string; text: string }) => {
  return (
    <h1 className="font-barlow_condensed uppercase leading-[19.2px]  tracking-[2.7px] text-white md:self-start md:text-xl md:leading-6 md:tracking-[3.38px] xl:text-[28px] xl:leading-[34px] xl:tracking-[4.73px]">
      <span className="pr-2 font-bold opacity-25 xl:pr-4">{number}</span> {text}
    </h1>
  );
};
export default PageTitle;
