const TravelReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-center grow w-full max-w-screen-lg pt-4 pb-20 md:pb-24">
      {children}
    </section>
  );
};

export default TravelReviewLayout;
