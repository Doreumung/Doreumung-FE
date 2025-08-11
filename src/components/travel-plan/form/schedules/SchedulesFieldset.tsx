const ScheduleFieldset = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <fieldset className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
      <legend className="text-darkerGray text-lg md:text-xl">{label}</legend>
      <div>{children}</div>
    </fieldset>
  );
};

export default ScheduleFieldset;
