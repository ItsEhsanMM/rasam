import React from 'react';
import { Button } from '../ui/button';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Plan {
  id: number;
  price: number;
  title: string;
  features: string[];
  color?: string;
}

interface PlansBoxProps {
  data: Plan[];
}

const PlanBoxes: React.FC<PlansBoxProps> = ({ data }) => {
  return (
    <>
      {data.map((plan) => (
        <div
          key={plan.id}
          className="space-y-10 overflow-hidden rounded-lg border border-black/20 pb-5"
        >
          <div
            className={'bg-primary relative z-0 py-5 text-center'}
            style={{
              backgroundColor: plan.color,
            }}
          >
            <h3 className="text-white">{plan.title}</h3>
            <span className="text-white">فروش آنلاین در بستری هوشمند</span>
            <div className="bg-accent absolute top-6 -left-9 z-10 -rotate-45 px-8 text-white">
              <span>جشنواره ویژه</span>
            </div>
          </div>
          <div className="text-accent w-full text-center text-lg font-bold">
            <span>از {plan.price} میلیون تومان</span>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            {plan.features.map((feat, index) => (
              <div key={feat} className="flex w-full flex-col items-center space-y-2">
                <div className="flex w-1/2 items-center justify-start gap-x-2">
                  <CircleCheck className="text-primary size-4" />
                  <span className="text-sm font-light">{feat}</span>
                </div>
                {index !== plan.features.length - 1 && (
                  <div className="w-1/2 border-b border-black/15" />
                )}
              </div>
            ))}
          </div>
          <div className="w-full text-center">
            <Button className="p-6">ثبت سفارش</Button>
          </div>
          <div className="flex w-full flex-col text-center text-sm leading-6 font-light">
            <span>یا مشاوره مستقیم با کارشناس</span>
            <Link className="font-medium" href={'tel:+09351436046'}>
              09351436046
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlanBoxes;
