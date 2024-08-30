// src/components/Card.tsx

import type React from 'react';

import Button from '../Button';
import Chip from '../Chip';
import type { Props } from './types';

const SpaceOverviewCard: React.FC<Props> = ({ spaceOverviewDetails }) => {
  const { address, images, day_pass_discounts_percentage, day_pass_price } =
    spaceOverviewDetails;
  return (
    <div className="flex max-w-sm flex-col overflow-hidden rounded-md bg-white p-3 shadow-dropShad drop-shadow-lg">
      <div className="mb-[1.125rem] flex justify-between gap-4">
        <p className="line-clamp-2 text-xl font-semibold text-textMain">
          {address}
        </p>
        <div className="flex h-[3.25rem] w-[3.25rem] flex-col items-center justify-around gap-2 bg-lightGray p-2">
          <img
            className="h-[1.125rem] w-[1.125rem]"
            src="/assets/icons/assistant_direction.svg"
            alt="HSR Sector 6, Service Road"
          />
          <span className="whitespace-nowrap text-[8px] text-textMain opacity-50">
            6 Kms
          </span>
        </div>
      </div>
      <div className="relative mb-[1.37rem] w-full">
        <img
          className="h-[12.63rem] w-full"
          src={images?.[0] ?? ''}
          alt="HSR Sector 6, Service Road"
        />
        <Chip
          className="absolute left-4 top-4 bg-gradient-to-r from-textMain to-[#2F4B59] text-sm text-primary2 shadow-[#FFD04F99] drop-shadow"
          icon={
            <img
              className="h-3 w-3"
              src="/assets/icons/platinum.svg"
              alt="platinum"
            />
          }
          label="Platinum"
        />
      </div>

      <div className="flex justify-between">
        <Button
          enableSuffixIcon
          discount={day_pass_discounts_percentage?.[1].value}
          label="Day Pass"
          text={
            <div className="flex items-baseline">
              <p className="text-xl font-semibold text-textMain">
                {`₹  ${day_pass_price}`}
              </p>
              <span className="tex-xs text-textSecondary">/day</span>
            </div>
          }
        />
        <Button
          variant="primary"
          enableSuffixIcon
          discount={day_pass_discounts_percentage?.[10].value}
          label="Day Pass"
          text={
            <div className="flex items-baseline">
              <p className="text-xl font-semibold text-textMain">₹ 249 </p>
              <span className="tex-xs text-textSecondary">/day</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SpaceOverviewCard;
