import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Service {
  id: number;
  imgUrl: string | null;
  title: string;
  description: string;
}

interface ServicesBoxProps {
  data: Service[];
  imageDivider?: React.HTMLAttributes<HTMLDivElement>;
  rightText?: boolean;
}

const ServicesBox: React.FC<ServicesBoxProps> = ({ data, imageDivider, rightText }) => {
  return (
    <>
      {data.map((service) => (
        <div key={service.id} className="border-border space-y-5 rounded-md border p-5 text-center">
          <div
            {...imageDivider}
            className={`flex w-full items-center justify-center overflow-hidden rounded-lg ${imageDivider?.className || ''}`}
          >
            <img
              className="size-full object-contain"
              src={service.imgUrl || ''}
              alt={service.title}
            />
          </div>
          <div className="space-y-2">
            <h3 className={rightText ? 'text-right' : ''}>{service.title}</h3>
            <p className={cn('text-sm font-extralight', rightText && 'text-right')}>
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesBox;
