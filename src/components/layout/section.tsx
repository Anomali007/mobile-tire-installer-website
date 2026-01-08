import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "dark" | "gradient";
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  background = "white",
  id,
}: SectionProps) {
  const backgroundStyles = {
    white: "bg-white dark:bg-gray-950",
    gray: "bg-gray-50 dark:bg-gray-900",
    dark: "bg-gray-900 text-white dark:bg-gray-950",
    gradient: "bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgroundStyles[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
