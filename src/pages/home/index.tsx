import { useEffect, useState } from 'react';

import CardChip from '@/components/common/CardChip';
import SpaceOverviewCard from '@/components/common/SpaceOverviewCard';
import type { Location } from '@/constants/commonTypes';

const Home = () => {
  const [data, setData] = useState<Location[]>([]);
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <section className="mb-[7.5rem]">
        <div className="mb-10 flex justify-between">
          <h2>Why Choose us?</h2>
          <img
            src="assets/icons/arrow.svg"
            alt="arrow icon"
            className="lg:hidden"
          />
        </div>
        <div className="mx-auto grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-0">
          <CardChip
            title="Community Events"
            iconUrl="/assets/icons/calenderEvent.svg"
            className="shadow shadow-white lg:border-b lg:border-r lg:border-white"
          />
          <CardChip
            title="Gym Facilities"
            iconUrl="/assets/icons/gymIcon.svg"
            className="shadow shadow-white lg:border-b lg:border-r lg:border-white"
          />
          <CardChip
            title="High-Speed WiFi"
            iconUrl="/assets/icons/wifi.svg"
            className="shadow shadow-white lg:border-b lg:border-r lg:border-white"
          />
          <CardChip
            title="Cafe & Tea Bar"
            iconUrl="/assets/icons/teaCup.svg"
            className="shadow shadow-white lg:border-b lg:border-white"
          />
          <CardChip
            title="Affordable"
            iconUrl="/assets/icons/rupee.svg"
            className="shadow shadow-white lg:border-r lg:border-white"
          />
          <CardChip
            title="Comfort Lounges"
            iconUrl="/assets/icons/lounges.svg"
            className="shadow shadow-white lg:border-r lg:border-white"
          />
          <CardChip
            title="Quick Booking"
            iconUrl="/assets/icons/clock.svg"
            className="shadow shadow-white lg:border-r lg:border-white"
          />
          <CardChip title="Sports Area" iconUrl="/assets/icons/sport.svg" />
        </div>
      </section>
      <section className="mb-[7.5rem]">
        <div className="mb-10 flex justify-between">
          <h2>Our Space Overview</h2>
          <img
            src="assets/icons/arrow.svg"
            alt="arrow icon"
            className="lg:hidden"
          />
        </div>
        <div className="grid grid-cols-1 gap-[2.8rem] lg:grid-cols-3">
          {data?.map((item) => (
            <SpaceOverviewCard key={item.id} spaceOverviewDetails={item} />
          ))}
        </div>
      </section>
      <section className="mb-10">
        <div className="mb-10 flex justify-between gap-3 lg:mb-[11.12rem] lg:gap-0">
          <h2>Download our app now</h2>
          <img
            src="assets/icons/arrow.svg"
            alt="arrow icon"
            className="lg:hidden"
          />
        </div>
        <div className="relative flex w-full items-end bg-white pb-[1.69rem] lg:h-[16.56rem] lg:w-auto lg:pl-[35.89rem] lg:pr-10">
          <img
            src="/assets/download-app-banner.svg"
            alt="download app banner"
            className="absolute bottom-0 left-8"
          />
          <div className="">
            <p className="mb-[2.4rem] hidden text-right text-textSecondary lg:block">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap-3">
              <a href="#" className="rounded-md">
                <img src="assets/googlePlay.svg" alt="googlePlay" />
              </a>
              <a href="#" className="rounded-md">
                <img src="assets/googlePlay.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
