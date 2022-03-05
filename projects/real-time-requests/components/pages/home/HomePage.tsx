import React from 'react';
import { formatDate } from '../../../lib/date';
import Fade from '../../fade/Fade';
import { Logo } from '../../Logo';

const requests = [
  {
    id: '1',
    location: 'United Kingdom',
    locationId: 'GB',
    date: new Date().getTime(),
  },
  {
    id: '2',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '3',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '4',
    location: 'Germany',
    locationId: 'DE',
    date: new Date().getTime(),
  },
  {
    id: '5',
    location: 'Jamaica',
    locationId: 'JM',
    date: new Date().getTime(),
  },
  {
    id: '6',
    location: 'Brazil',
    locationId: 'BR',
    date: new Date().getTime(),
  },
  {
    id: '7',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '8',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '9',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '10',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '11',
    location: 'Belgium',
    locationId: 'BE',
    date: new Date().getTime(),
  },
  {
    id: '12',
    location: 'United States',
    locationId: 'US',
    date: new Date().getTime(),
  },
  {
    id: '13',
    location: 'Panama',
    locationId: 'PA',
    date: new Date().getTime(),
  },
  {
    id: '14',
    location: 'France',
    locationId: 'FR',
    date: new Date().getTime(),
  },
];

const HomePage = () => {
  return (
    <div className="pb-32">
      <Fade />

      <Logo />

      <div className="w-full m-auto mt-44 md:mt-56 max-w-4xl">
        <div className="px-20 grid gap-y-8">
          {/* <div className="divide-y divide-solid px-20 divide-gray-100"> */}
          {requests.map((request) => (
            <div
              key={request.id}
              className="md:flex md:items-center w-full py-12 border border-gray-200 rounded-md px-8"
            >
              <div className="md:flex md:items-center md:gap-10">
                <div className="rounded-sm overflow-hidden h-6">
                  <img
                    className="block h-full"
                    src={`/assets/flags/${request.locationId}.svg`}
                    alt={request.location}
                  />
                </div>

                <div className="pt-4 text-lg md:text-xl md:pt-0">
                  {request.location}
                </div>
              </div>

              <div className="pt-4 ml-auto md:pt-0">
                {formatDate(request.date)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
