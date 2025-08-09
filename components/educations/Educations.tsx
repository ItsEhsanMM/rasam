import { educations } from '@/lib/const';
import ServicesBox from '../Services/ServicesBox';

const Educations = () => {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2>دوره‌های رایگان آژانس نوآوری رسام</h2>
        <span className="font-extralight">
          محتوای رایگان و با کیفیت آموزشی به همراه پشتیبانی و بروزرسانی
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        <ServicesBox data={educations} rightText />
      </div>
    </div>
  );
};
export default Educations;
