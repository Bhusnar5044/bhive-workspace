import type { FC } from 'react';
import { memo, useMemo } from 'react';

import { cn } from '@/styles/utils';

import type { ChipProps } from './types';

const Chip: FC<ChipProps> = memo(
  ({ label, bgColor, borderColor, textColor, className, children, icon }) => {
    const merged = useMemo(() => {
      const backgroundColor = bgColor ?? 'gray';
      return cn(
        `items-center bg-${backgroundColor} font-medium`,
        borderColor ? `border border-${borderColor}` : '',
        textColor,
        children ? '' : 'inline-flex',
        className
      );
    }, [bgColor, borderColor, children, className, textColor]);

    return (
      <div className={merged}>
        {icon ?? null}
        {label}
        {children}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
export default Chip;
