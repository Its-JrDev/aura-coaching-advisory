import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-normal transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap shrink-0 cursor-pointer select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3 rounded-xl gap-2.5"
  };

  const variantStyles = {
    primary: "bg-stone-900 text-stone-50 hover:bg-stone-800 active:scale-[0.98] shadow-sm dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white",
    secondary: "bg-amber-100/70 text-amber-900 hover:bg-amber-100 active:scale-[0.98] dark:bg-amber-950/60 dark:text-amber-200 dark:hover:bg-amber-900/60",
    outline: "border border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100/70 active:scale-[0.98] dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800/60",
    ghost: "bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-100"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
