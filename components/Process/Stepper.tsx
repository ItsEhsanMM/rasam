import { User, Sliders, Search, Grid, Headphones, Type } from 'lucide-react';

export default function Stepper() {
  const steps = [
    {
      icon: <User className="text-accent h-6 w-6" />,
      title: 'پرسونا و تحقیق',
      description:
        'جلسه با کارفرمان و ذینفعان، به ما کمک می‌کند تا در تهیه پرسونا و انجام تحقیق کاربری، اطلاعات جمع آوری کنیم.',
    },
    {
      icon: <Sliders className="text-accent h-6 w-6" />,
      title: 'دسترسی پذیری',
      description:
        'در راستای تهیه محصول متناسب با نیاز جامعه و توان‌خواهان؛ راهکارهای WCAG نسخه دوم، در دستور کار است.',
    },
    {
      icon: <Search className="text-accent h-6 w-6" />,
      title: 'کاربرد پذیری و ارزیابی',
      description:
        'ارزیابی اکتشافی و تست‌ UX یکی از روش‌های کم هزینه و مهم برای بهبود کاربردپذیری محصولات دیجیتال است.',
    },
    {
      icon: <Grid className="text-accent h-6 w-6" />,
      title: 'معماری اطلاعات',
      description:
        'پیاده‌سازی ساختار معماری اطلاعات، تست مرتب‌سازی، یوزرفلو، وایرفلو و نقشه مشتری در این مرحله است.',
    },
    {
      icon: <Headphones className="text-accent h-6 w-6" />,
      title: 'UI - رابط کاربری',
      description:
        'طراحی low-fi و high-fi یا همان طراحی وایرفریم و پروتوتایپ محصول دیجیتال در این مرحله اجرا می‌شود.',
    },
    {
      icon: <Type className="text-accent h-6 w-6" />,
      title: 'UX Writing - تجربه نویسی',
      description:
        'متون و محتوای محصولات، میکروکپی و به طور کل عبارت‌هایی که در سهولت استفاده از نرم‌افزار کاربرد دارند.',
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
