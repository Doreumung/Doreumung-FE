const ScheduleArticle = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <article className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
      <label className="text-darkerGray text-lg md:text-xl">{label}</label>
      <div>{children}</div>
    </article>
  );
};

export default ScheduleArticle;
