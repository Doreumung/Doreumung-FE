const TravelReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full max-w-screen-lg min-h-screen px-4 pt-4 pb-8 md:px-12 md:pt-8 md:pb-20">
      {children}
    </section>
  );
};

export default TravelReviewLayout;
