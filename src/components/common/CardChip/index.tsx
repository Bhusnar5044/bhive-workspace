// src/components/Card.tsx

import type React from 'react';

import { cn } from '@/styles/utils';

import type { CardProps } from './types';

const CardChip: React.FC<CardProps> = ({ title, iconUrl, className }) => {
  return (
    <div
      className={cn(
        'box-border flex h-[5rem] max-w-[18.75rem] items-center gap-3 rounded bg-white p-3 lg:rounded-none lg:bg-lightGray',
        className
      )}
    >
      <img className="h-8 w-8 w-full" src={iconUrl} alt={title} />
      <p className="tex-lg text-textMain">{title}</p>
    </div>
  );
};

export default CardChip;
