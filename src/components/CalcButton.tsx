// components/CalcButton.tsx
import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type CalcButtonProps = {
  id: string;
  value: string;
  onClick: (value: string) => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
};

export default function CalcButton({
  id,
  value,
  onClick,
  variant = "secondary",
  className,
}: CalcButtonProps) {
  return (
    <Button
      id={id}
      onClick={() => onClick(value)}
      variant={variant}
      className={className}
    >
      {value}
    </Button>
  );
}
