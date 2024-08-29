import type { PropsWithChildren } from 'react';

export type Variant = 'primary' | 'secondary';

export interface ButtonProps extends PropsWithChildren {
  variant?: Variant;
  className?: string;
  enableSuffixIcon?: boolean;
  discount?: number;
  label?: string;
  text?: JSX.Element | string;
}
