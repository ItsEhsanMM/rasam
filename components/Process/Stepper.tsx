import { User, Sliders, Search, Grid, Headphones, Type } from 'lucide-react';

export default function Stepper() {
  const steps = [
    {
      icon: <User className="text-accent h-6 w-6" />,
      title: 'مشاوره اولیه',
      description: 'بررسی نیازها و تعیین بهترین راهکار برای پروژه.',
    },
    {
      icon: <Sliders className="text-accent h-6 w-6" />,
      title: 'پر کردن فرم اطلاعات اولیه',
      description: 'جمع‌آوری اطلاعات لازم برای شروع طراحی.',
    },
    {
      icon: <Search className="text-accent h-6 w-6" />,
      title: 'ارائه پیش‌ فاکتور و زمان‌بندی',
      description: 'اعلام هزینه و برنامه زمان‌بندی پروژه.',
    },
    {
      icon: <Grid className="text-accent h-6 w-6" />,
      title: 'تایید و عقد قرارداد',
      description: 'شروع رسمی همکاری پس از توافق نهایی.',
    },
    {
      icon: <Headphones className="text-accent h-6 w-6" />,
      title: 'طراحی اولیه و تایید طرح',
      description: 'ارائه پیش‌طرح و اعمال اصلاحات بر اساس بازخورد شما.',
    },
    {
      icon: <Type className="text-accent h-6 w-6" />,
      title: 'پیاده‌سازی و توسعه',
      description: 'اجرای نهایی طرح با استانداردهای فنی روز.',
    },
    {
      icon: <Type className="text-accent h-6 w-6" />,
      title: 'تحویل نهایی',
      description: 'تحویل کامل پروژه و اطمینان از صحت عملکرد آن.',
    },
    {
      icon: <Type className="text-accent h-6 w-6" />,
      title: 'پشتیبانی و به‌روزرسانی‌ها',
      description: 'همراهی و بروز رسانی برای حفظ کیفیت کار.',
    },
  ];

  return (
    <div className="relative flex flex-col gap-y-10 pl-5">
      <div className="bg-accent absolute top-0 bottom-0 left-[51.8px] w-px md:right-[32.1px]"></div>

      {steps.map((step, i) => (
        <div key={i} className="flex w-full items-start justify-end md:flex-row-reverse">
          <div className="ml-6 space-y-1 text-left md:mr-6 md:ml-0 md:text-right">
            <h3 className="text-accent text-lg font-bold">{step.title}</h3>
            <p className="text-text text-sm leading-relaxed font-extralight">{step.description}</p>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="border-accent shadow-accent z-10 flex h-16 w-16 rotate-45 items-center justify-center rounded-lg border bg-white shadow">
              <div className="-rotate-45">{step.icon}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
