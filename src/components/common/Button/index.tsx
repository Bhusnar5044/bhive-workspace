import type { FC } from 'react';

import { cn } from '@/styles/utils';

import type { ButtonProps, Variant } from './types';

const getVariantTheme = (variant?: Variant) => {
  if (variant === 'primary') return 'bg-lightYellow hover:bg-darkYellow';
  return 'bg-lightGray hover:bg-darkGray';
};

const Button: FC<ButtonProps> = ({
  variant,
  className,
  enableSuffixIcon,
  discount,
  label,
  text,
  children,
}) => {
  const theme = getVariantTheme(variant);
  return (
    <button
      type="button"
      className={cn(
        'relative flex min-w-[10.67rem] items-center justify-between gap-3 rounded p-2 text-sm text-white shadow-dropShad drop-shadow focus:outline-none focus:ring-4',
        theme,
        className
      )}
    >
      <div className="flex flex-col items-baseline">
        {label && (
          <span className="tex-sm whitespace-nowrap text-textSecondary">
            {label}
          </span>
        )}
        {typeof text === 'string' ? (
          <p className="whitespace-nowrap text-sm text-textMain">{text}</p>
        ) : (
          text
        )}
      </div>
      {children}
      {enableSuffixIcon && (
        <img
          className="h-[12px] w-6"
          alt="slideArrow"
          src="/assets/icons/slideArrow.svg"
        />
      )}
      {!!discount && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-textMain p-1 text-2xs text-[#FFFDF7]">{`${discount}% Discount`}</span>
      )}
    </button>
  );
};

export default Button;
