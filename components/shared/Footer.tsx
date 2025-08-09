import { edu, links } from '@/lib/const';
import { Instagram, MapPin, Smartphone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-4 rounded-md border border-black/20 p-4 md:flex-row md:justify-between">
        <div className="flex flex-col md:w-2/5">
          <span className="text-lg font-medium">درباره رسام</span>
          <p className="text-sm leading-6 font-extralight">
            رسام یک مجموعه پرتلاش و جوان است که اسفند 1393 متولد شد. این برند تمام تمرکز خود را به
            آموزش و خدمات مبتنی بر وب، مانند طراحی سایت و UI/UX اختصاص داده است و می کوشد رضایت
            کاربران خود را جلب کند.
          </p>
        </div>
        <div className="flex h-full items-center gap-x-5 pl-10 md:p-0">
          <div className="flex flex-col gap-y-2 md:gap-y-5">
            <span className="text-accent text-lg font-medium">پیوندها</span>
            <div className="leading-7">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <Link className="flex items-center gap-x-2" href={'/'} key={link.id}>
                    <Icon strokeWidth={1} className="size-4.5" />
                    <span className="font-extralight md:text-sm">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:gap-y-5">
            <span className="text-accent text-lg font-medium">آموزش</span>
            <div className="leading-7">
              {edu.map((edu) => {
                const Icon = edu.icon;

                return (
                  <Link className="flex items-center gap-x-2" href={'/'} key={edu.id}>
                    <Icon strokeWidth={1} className="size-4.5" />
                    <span className="font-extralight md:text-sm">{edu.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <span className="text-accent text-lg font-medium">نماد ها</span>
          <div className="flex items-center justify-between">
            <div className="size-40 rounded-lg border text-center md:size-10 md:text-xs">E</div>
            <div className="size-40 rounded-lg border text-center md:size-10 md:text-xs">S</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 rounded-lg bg-[#f4f5f7] p-4 md:flex-row">
        <div className="flex w-full gap-x-10 gap-y-5 md:flex-col">
          <div className="flex items-center gap-x-1">
            <MapPin strokeWidth={1} className="size-4" />
            <span className="text-sm font-light">ایران، اصفهان و ...</span>
          </div>
          <div className="flex items-center gap-x-1">
            <Smartphone strokeWidth={1} className="size-4" />
            <span className="text-sm font-light">0935-143-6045</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-x-3">
          <Instagram strokeWidth={1} />
          <Instagram strokeWidth={1} />
          <Instagram strokeWidth={1} />
        </div>
        <div className="w-full text-center">
          <span className="text-sm font-extralight">
            تمامی حقوق این وب‌سایت متعلق به آژانس نوآوری رسام است.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
