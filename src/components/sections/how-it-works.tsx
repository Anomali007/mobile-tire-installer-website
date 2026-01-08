import { Section, SectionHeader } from "@/components/layout/section";

const steps = [
  {
    number: "1",
    title: "Pick your service",
    description: "Choose what you need in under a minute.",
  },
  {
    number: "2",
    title: "Choose your location + time window",
    description: "Home, work, or anywhere in Wisconsin.",
  },
  {
    number: "3",
    title: "Confirm your booking",
    description: "You'll receive a confirmation and arrival updates.",
  },
  {
    number: "4",
    title: "We arrive and get it done",
    description: "Pro install, clean finish, and digital receipt.",
  },
];

export function HowItWorks() {
  return (
    <Section background="gray" id="how-it-works">
      <SectionHeader
        title="Simple from start to finish"
        subtitle="Get your tires installed in 4 easy steps"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 lg:block" />
            )}

            <div className="relative flex flex-col items-center text-center">
              {/* Step number */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
