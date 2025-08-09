import Image from 'next/image';
import { Button } from '../ui/button';

const RequestForm = () => {
  return (
    <section className="relative flex justify-end space-y-5 overflow-hidden rounded-xl bg-[#19BAC726] bg-[url('https://rasam.agency/wp-content/uploads/2021/12/pattern-svg.svg')] bg-right p-5">
      <div className="absolute top-0 right-0 hidden md:block lg:-top-10 lg:right-20">
        <Image
          src={
            'https://rasam.agency/wp-content/uploads/elementor/thumbs/person-consultant-qlwc4dqzpanxyvoamdrcc84mfc79di9vi6zuef8e0w.webp'
          }
          alt="man with glasses"
          className="size-60 lg:size-80"
          width={400}
          height={400}
        />
      </div>
      <div className="md:w-2/3">
        <div className="mt-5 space-y-5">
          <h2>درخواست مشاوره و پروژه</h2>
          <p className="text-sm leading-7 font-extralight">
            اگر می‌خواهید یک وب‌سایت حرفه‌ای برای کسب‌وکار خود راه‌اندازی کنید، می‌توانید از متخصصین
            آژانس نوآوری رسام، قبل از اینکه پرداختی انجام دهید مشاوره بگیرید. کافیست با کلیک روی
            دکمه زیر فرم درخواست را پر کرده و یا مستقیما با کارشناسان ما تماس بگیرید.
          </p>
        </div>
        <div>
          <Button className="px-5">فرم درخواست</Button>
        </div>
      </div>
    </section>
  );
};
export default RequestForm;
