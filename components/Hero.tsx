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
            راه‌اندازی و طراحی وب، قلب تپنده کسب‌و‌کارها در عصر امروز است. با استفاده از سایت
            می‌توانید کسب‌و‌کار و چرخه درآمدی خود را چندین برابر کنید و به‌سرعت از رقیبان خود پیشی
            بگیرید. رسام با ارائه خدمات حرفه‌ای طراحی وب آماده همکاری برای رشد و بهبود کسب‌و‌کار
            شماست.
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

      <Image
        src={'https://rasam.agency/wp-content/uploads/2023/05/rasam-main-aboved.webp'}
        alt="hero image"
        className="size-full object-cover md:size-2/3"
        width={500}
        height={320}
      />
    </section>
  );
};
export default Hero;
