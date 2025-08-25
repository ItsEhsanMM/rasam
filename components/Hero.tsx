import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col space-y-5 md:flex-row">
      <div className="flex w-full flex-col gap-y-5">
        <div className="leading-8">
          <h1>رسام، آژانس نوین طراحی وب</h1>
          <span className="text-sm">طراحی وب و فروشگاه آنلاین با تلفیقی از سادگی و خلاقیت</span>
        </div>
        <div className="max-w-[95%]">
          <p className="text-sm leading-7 font-light">
            راه‌اندازی یک وب‌سایت حرفه‌ای، مهم‌ترین و نخستین گام برای ورود قدرتمند و مستمر به دنیای
            دیجیتال و افزایش تاثیرگذاری کسب‌وکار شما است. در رزالیتک، با طراحی اختصاصی وب‌سایت‌های
            متناسب با نیازهای خاص هر کسب‌وکار، بهینه‌سازی دقیق سئو بر اساس آخرین استانداردها و ارائه
            خدمات حرفه‌ای طراحی رابط کاربری (UI/UX)، حضور آنلاین شما را به سطحی می‌رسانیم که نه تنها
            دیده شوید، بلکه در ذهن مشتریان ماندگار بمانید. تیم متخصص و مجرب ما با بهره‌گیری از
            جدیدترین فناوری‌ها و متدهای روز طراحی و بازاریابی دیجیتال، همراه شماست تا مسیر توسعه،
            رشد و پیشرفت کسب‌وکار شما را با سرعت و کیفیت بالا هموار کند و فرصت‌های تازه‌ای را پیش
            رویتان قرار دهد. با رزالیتک، کسب‌وکار شما نه تنها امروز، بلکه در آینده دیجیتال نیز موفق
            و پایدار خواهد بود.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className="text-primary text-xl">5+</span>{' '}
            <span className="font-medium">هزار ساعت تدریس</span>
          </div>
          <div>
            <span className="text-primary text-xl">120+</span>{' '}
            <span className="font-medium">پروژه متفاوت</span>
          </div>
        </div>
        <div className="mt-2 border-b-2 border-dotted border-black/15" />
        <div className="flex items-center gap-x-5">
          <Button className="p-5">طراحی وب</Button>
          <Link href={'tel:+989351436042'} className="flex items-center gap-x-2">
            <PhoneCall className="text-primary size-5" />
            <span className="flex text-sm font-medium" dir="ltr">
              0935 143 60 45
            </span>
          </Link>
        </div>
      </div>

      <img
        src={'https://rasam.agency/wp-content/uploads/2023/05/rasam-main-aboved.webp'}
        alt="hero image"
        className="size-full object-cover md:size-2/3"
      />
    </section>
  );
};
export default Hero;
