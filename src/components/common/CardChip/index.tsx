// src/components/Card.tsx

import type React from 'react';

import { cn } from '@/styles/utils';

import type { CardProps } from './types';

const CardChip: React.FC<CardProps> = ({ title, iconUrl, className }) => {
  return (
    <div
      className={cn(
        'box-border flex h-[5rem] flex-col items-center justify-start gap-3 rounded bg-white p-3 shadow-dropShad drop-shadow lg:min-w-[18.75rem] lg:flex-row lg:rounded-none lg:bg-lightGray lg:px-[1.62rem] lg:py-[1.68rem]',
        className
      )}
    >
      <img className="h-7 w-7" src={iconUrl} alt={title} />
      <p className="text-sm font-medium text-textMain lg:whitespace-nowrap lg:text-lg">
        {title}
      </p>
    </div>
  );
};

export default CardChip;
