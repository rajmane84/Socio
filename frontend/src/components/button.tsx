import clsx from "clsx";
import { motion, type HTMLMotionProps } from "motion/react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children"
> &
  HTMLMotionProps<"button">;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseClasses =
    "border-2 border-black rounded-md px-4 py-1 text-base";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    ghost: "bg-white text-black",
    danger: "bg-alert text-white",
  };

  const finalClasses = clsx(
    baseClasses,
    variantClasses[variant],
    className,
  );

  return (
    <motion.button
      initial={{
        x: 0,
        y: 0,
        filter: "drop-shadow(4px 4px 0px black)",
      }}
      whileHover={{
        x: 4,
        y: 4,
        filter: "drop-shadow(0px 0px 0px black)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className={finalClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};
