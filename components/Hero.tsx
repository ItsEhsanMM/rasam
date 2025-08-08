import Image from 'next/image';

const Hero = () => {
  return (
    <section className="space-y-5">
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
        <div></div>
      </div>
      <div className="border-b-2 border-dotted border-black/15" />

      <Image
        src={'https://rasam.agency/wp-content/uploads/2023/05/rasam-main-aboved.webp'}
        alt="hero image"
        width={500}
        height={320}
      />
    </section>
  );
};
export default Hero;
