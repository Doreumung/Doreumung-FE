const TravelReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full max-w-screen-lg h-[calc(100vh - 64px)] pt-4 pb-20 md:h-[calc(100vh - 80px)] md:px-12 md:pt-8 md:pb-24">
      {children}
    </section>
  );
};

export default TravelReviewLayout;
