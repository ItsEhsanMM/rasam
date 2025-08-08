import { services } from '@/lib/const';
import Image from 'next/image';
import ServicesBox from './ServicesBox';

const Services = () => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2>خدمات آژانس نوآوری رسام</h2>
        <span className="font-extralight">
          آماده ارائه خدمات حرفه‌ای با بیش از 7 سال تجربه کاری
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        <ServicesBox services={services} />
      </div>
    </div>
  );
};
export default Services;
