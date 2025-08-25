import {
  Contact,
  EqualApproximately,
  GalleryHorizontalEnd,
  Hammer,
  House,
  PhoneCall,
  SquareKanban,
  UserRound,
  UserRoundSearch,
} from 'lucide-react';

export const navlinks = [
 
  {
    name: 'پلن های قیمتی',
    href: 'plans',
    icon: SquareKanban,
    subMenu: [
      {
        name: 'فروشگاهی',
      },
      {
        name: 'شرکتی',
      },
      {
        name: 'رزرواسیون',
      },
      {
        name: 'نوبت دهی',
      },
      {
        name: 'آموزشی',
      },
      {
        name: 'مجله ای',
      },
    ],
  },
  {
    name: 'نمونه کار ها',
    href: 'portfolio',
    icon: GalleryHorizontalEnd,
    subMenu: [
      {
        name: 'فروشگاهی',
      },
      {
        name: 'شرکتی',
      },
      {
        name: 'رزرواسیون',
      },
      {
        name: 'نوبت دهی',
      },
      {
        name: 'آموزشی',
      },
      {
        name: 'مجله ای',
      },
    ],
  },
  { name: 'درباره ما', href: 'about-us', icon: EqualApproximately },
  { name: 'تماس با ما', href: 'contact-us', icon: Contact },
   {
    name: 'سوالات متداول',
    href: '/',
    icon: House,
  },
  {
    name: 'وبلاگ',
    href: 'services',
    icon: Hammer,
  },
];

export const services = [
  {
    id: 0,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/03/gif-shop-web.gif',
    title: 'طراحی وب سایت و فروشگاه',
    description:
      'فروشگاه اینترنتی اختصاصی بسازید و محصولات خود را به مشتریان بیشتری در سراسر کشور عرضه کنید.',
  },
  {
    id: 1,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/03/gif-design.gif',
    title: 'طراحی رابط کاربری (UI/UX)',
    description:
      'رابط کاربری چشم‌نواز و تجربه‌ای روان برای افزایش رضایت و ماندگاری کاربران ایجاد کنید.',
  },
  {
    id: 2,
    imgUrl: null,
    title: 'برگزاری دوره‌های آموزشی',
    description: 'مهارت‌های تخصصی خود را در حوزه طراحی وب، سئو و دیجیتال مارکتینگ گسترش دهید.',
  },
  {
    id: 3,
    imgUrl: 'https://rasam.agency/wp-content/uploads/2024/03/gif-seo.gif',
    title: 'بهینه‌سازی سئو',
    description:
      'اصول سئو را به کار بگیرید تا در نتایج گوگل جایگاه برتر کسب کنید و مشتریان بیشتری جذب نمایید.',
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

export const plans = [
  {
    id: 0,
    title: 'اقتصادی',
    features: ['دسترسی نامحدود به تمام مقالات', 'پشتیبانی ایمیلی در ساعات اداری'],
  },
  {
    id: 1,
    title: 'پیشرفته',
    color: 'var(--secondary)',
    features: [
      'همه امکانات پلن قبلی',
      'جلسه مشاوره خصوصی یک‌ساعته',
      'دسترسی به ویدیوهای آموزشی ویژه',
    ],
  },
  {
    id: 2,
    title: 'شرکتی',
    features: [
      'همه امکانات پلن‌های قبلی',
      'پشتیبانی ۲۴ ساعته تلفنی و واتساپ',
      'عضویت در گروه VIP و رویدادهای اختصاصی',
      'برنامه‌ریزی شخصی‌سازی شده بر اساس اهداف شما',
    ],
  },
];

export const links = [
  { id: 0, title: 'درباره ما', icon: UserRound },
  { id: 1, title: 'تماس با ما', icon: PhoneCall },
  { id: 2, title: 'فرصت های شغلی', icon: UserRoundSearch },
];

export const edu = [
  { id: 0, title: 'درباره ما', icon: UserRound },
  { id: 1, title: 'تماس با ما', icon: PhoneCall },
  { id: 2, title: 'فرصت های شغلی', icon: UserRoundSearch },
];


export const portfolioData = [
  {
    id: 1,
    title: "UI Kit مدیریت پروژه",
    image: "/images/ui-project.jpg",
    category: "UI/UX",
    team: "تیم آلفا",
  },
  {
    id: 2,
    title: "اپلیکیشن فروشگاه آنلاین",
    image: "/images/store-app.jpg",
    category: "اپلیکیشن",
    team: "تیم بتا",
  },
  {
    id: 3,
    title: "وبسایت رستوران",
    image: "/images/restaurant.jpg",
    category: "وبسایت",
    team: "تیم گاما",
  },
  {
    id: 4,
    title: "داشبورد آنالیز داده",
    image: "/images/data-dashboard.jpg",
    category: "UI/UX",
    team: "تیم دلتا",
  },
  {
    id: 5,
    title: "اپلیکیشن تناسب اندام",
    image: "/images/fitness-app.jpg",
    category: "اپلیکیشن",
    team: "تیم اسپورت",
  },
  {
    id: 6,
    title: "وبسایت شرکتی مدرن",
    image: "/images/corporate.jpg",
    category: "وبسایت",
    team: "تیم وِرا",
  },
  {
    id: 7,
    title: "اپلیکیشن یادداشت برداری",
    image: "/images/note-app.jpg",
    category: "اپلیکیشن",
    team: "تیم نوتا",
  },
  {
    id: 8,
    title: "UI Kit اپلیکیشن مالی",
    image: "/images/finance-ui.jpg",
    category: "UI/UX",
    team: "تیم فایننس",
  },
  {
    id: 9,
    title: "وبسایت نمونه کار شخصی",
    image: "/images/portfolio.jpg",
    category: "وبسایت",
    team: "تیم پرسونال",
  },
  {
    id: 10,
    title: "اپلیکیشن چت و پیام‌رسان",
    image: "/images/chat-app.jpg",
    category: "اپلیکیشن",
    team: "تیم مسیج",
  },
  {
    id: 11,
    title: "UI Kit آموزش آنلاین",
    image: "/images/elearning-ui.jpg",
    category: "UI/UX",
    team: "تیم اِدو",
  },
  {
    id: 12,
    title: "وبسایت فروش دوره آموزشی",
    image: "/images/edu-site.jpg",
    category: "وبسایت",
    team: "تیم لرن",
  },
  {
    id: 13,
    title: "اپلیکیشن مدیریت وظایف",
    image: "/images/tasks-app.jpg",
    category: "اپلیکیشن",
    team: "تیم اورگانایزر",
  },
  {
    id: 14,
    title: "UI Kit شبکه اجتماعی",
    image: "/images/social-ui.jpg",
    category: "UI/UX",
    team: "تیم سوشال",
  },
  {
    id: 15,
    title: "وبسایت گردشگری",
    image: "/images/travel-site.jpg",
    category: "وبسایت",
    team: "تیم تراول",
  },
  {
    id: 16,
    title: "اپلیکیشن موسیقی",
    image: "/images/music-app.jpg",
    category: "اپلیکیشن",
    team: "تیم موزیک",
  },
  {
    id: 17,
    title: "UI Kit اپلیکیشن سلامتی",
    image: "/images/health-ui.jpg",
    category: "UI/UX",
    team: "تیم هلث",
  },
  {
    id: 18,
    title: "وبسایت خبری",
    image: "/images/news-site.jpg",
    category: "وبسایت",
    team: "تیم نیوز",
  },
  {
    id: 19,
    title: "اپلیکیشن رزرو هتل",
    image: "/images/hotel-app.jpg",
    category: "اپلیکیشن",
    team: "تیم هتلینگ",
  },
  {
    id: 20,
    title: "UI Kit فروشگاه آنلاین",
    image: "/images/shop-ui.jpg",
    category: "UI/UX",
    team: "تیم شاپ",
  },
];
