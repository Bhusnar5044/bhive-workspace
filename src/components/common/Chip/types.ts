import type { PropsWithChildren } from 'react';

export interface ChipProps extends PropsWithChildren {
  label: string;
  icon?: JSX.Element;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
}
