// src/components/Card.tsx

import type React from 'react';

import { cn } from '@/styles/utils';

import type { CardProps } from './types';

const CardChip: React.FC<CardProps> = ({ title, iconUrl, className }) => {
  return (
    <div
      className={cn(
        'box-border flex h-[5rem] min-w-[18.75rem] justify-start gap-3 rounded bg-white p-3 px-[1.62rem] py-[1.68rem] lg:rounded-none lg:bg-lightGray',
        className
      )}
    >
      <img className="h-8 w-8" src={iconUrl} alt={title} />
      <p className="tex-lg font-medium text-textMain lg:whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

export default CardChip;
