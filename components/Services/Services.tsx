import { services } from '@/lib/const';
import ServicesBox from './ServicesBox';

const Services = () => {
  return (
    <section className="space-y-10">
      <div className="text-center">
        <h2>خدمات آژانس نوآوری رسام</h2>
        <span className="font-extralight">
          آماده ارائه خدمات حرفه‌ای با بیش از 7 سال تجربه کاری
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        <ServicesBox
          data={services}
          imageDivider={{
            className: 'size-25',
          }}
        />
      </div>
    </section>
  );
};
export default Services;
