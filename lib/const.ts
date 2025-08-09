import {
  Contact,
  EqualApproximately,
  GalleryHorizontalEnd,
  Hammer,
  House,
  SquareKanban,
} from 'lucide-react';

export const navlinks = [
  {
    name: 'خانه',
    href: '/',
    icon: House,
  },
  {
    name: 'خدمات',
    href: 'services',
    icon: Hammer,
  },
  { name: 'پلن های قیمتی', href: 'plans', icon: SquareKanban },
  {
    name: 'نمونه کار ها',
    href: 'portfolio',
    icon: GalleryHorizontalEnd,
  },
  { name: 'درباره ما', href: 'about-us', icon: EqualApproximately },
  { name: 'تماس با ما', href: 'contact-us', icon: Contact },
];

export const services = [
  {
    id: 0,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/03/gif-shop-web.gif',
    title: 'طراحی وب سایت و فروشگاه',
    description:
      'راه‌اندازی سایت اولین قدم برای رشد کسب‌وکارها است. با طراحی سایت اصولی از رقبا پیشی بگیرید.',
  },
  {
    id: 1,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/03/gif-design.gif',
    title: 'طراحی رابط کاربری (UI/UX)',
    description:
      'طراحی رابط کاربری UI/UX بهترین نقشه راه برای طراحی یک سایت جذاب با تجربه کاربری بالا است.',
  },
  {
    id: 2,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/03/gif-seo.gif',
    title: 'بهینه سازی و SEO',
    description:
      'با رعایت اصول سئو در طراحی سایت می‌توانید در مدت‌زمان کوتاهی رتبه یک گوگل را از آن خود کنید.',
  },
];

export const educations = [
  {
    id: 0,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/08/uiux-banner.webp',
    title: 'دوره رایگان طراحی رابط و تجربه کاربری',
    description:
      'در این دوره ابتدا کلیاتی از مباحث UX را مطرح می‌کنیم و سپس به صورت پروژه محور، نرم‌افزار فیگما را آموزش می‌دهیم.',
  },
  {
    id: 1,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/08/wordpress-banner.webp',
    title: 'دوره رایگان وردپرس و المنتور',
    description:
      'دوره رایگان طراحی وب‌سایت به آموزش عملی و پروژه محور وردپرس، برگه‌ساز المنتور و افزونه‌های کاربردی می‌پردازد.',
  },
  {
    id: 2,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/09/seo-course-banner.webp',
    title: 'دوره رایگان بهینه‌سازی و سئو سایت',
    description:
      'در این دوره به صورت کاربردی، موضوعات سئو در 8 فصل متفاوت به همراه ابزارها، آموزش داده خواهد شد.',
  },
];
