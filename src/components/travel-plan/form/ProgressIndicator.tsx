const ProgressIndicator = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <div className="fixed top-0 z-50 w-full h-1 md:h-2 overflow-hidden">
      <div
        className="h-full bg-logo transition-all duration-300 ease-in-out"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
      />
    </div>
  );
};

export default ProgressIndicator;
