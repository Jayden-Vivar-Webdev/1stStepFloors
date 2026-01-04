"use client";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ProcessStepsSectionProps = {
  steps: ProcessStep[];
  className?: string;
};

export const ProcessStepsSection = ({
  steps,
  className = "",
}: ProcessStepsSectionProps) => {
  return (
    <section className={`container mx-auto px-6 py-16 ${className}`}>
      <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.step}
            className="flex flex-col gap-3 border-l-4 border-amber-500 pl-4"
          >
            <span className="text-sm font-semibold text-amber-600">
              {step.step}
            </span>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
