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
    price:10,
  },
  {
    id: 1,
    title: 'پیشرفته',
    color: 'var(--secondary)',
    price:10,
    features: [
      'همه امکانات پلن قبلی',
      'جلسه مشاوره خصوصی یک‌ساعته',
      'دسترسی به ویدیوهای آموزشی ویژه',
    ],
  },
  {
    id: 2,
    title: 'شرکتی',
    price:10,
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
  { id: 1, title: "UI Kit مدیریت پروژه", image: "https://picsum.photos/400/300?random=1", category: "UI/UX", team: "تیم آلفا" },
  { id: 2, title: "اپلیکیشن فروشگاه آنلاین", image: "https://picsum.photos/400/300?random=2", category: "اپلیکیشن", team: "تیم بتا" },
  { id: 3, title: "وبسایت رستوران", image: "https://picsum.photos/400/300?random=3", category: "وبسایت", team: "تیم گاما" },
  { id: 4, title: "داشبورد آنالیز داده", image: "https://picsum.photos/400/300?random=4", category: "UI/UX", team: "تیم دلتا" },
  { id: 5, title: "اپلیکیشن تناسب اندام", image: "https://picsum.photos/400/300?random=5", category: "اپلیکیشن", team: "تیم اسپورت" },
  { id: 6, title: "وبسایت شرکتی مدرن", image: "https://picsum.photos/400/300?random=6", category: "وبسایت", team: "تیم وِرا" },
  { id: 7, title: "اپلیکیشن یادداشت برداری", image: "https://picsum.photos/400/300?random=7", category: "اپلیکیشن", team: "تیم نوتا" },
  { id: 8, title: "UI Kit اپلیکیشن مالی", image: "https://picsum.photos/400/300?random=8", category: "UI/UX", team: "تیم فایننس" },
  { id: 9, title: "وبسایت نمونه کار شخصی", image: "https://picsum.photos/400/300?random=9", category: "وبسایت", team: "تیم پرسونال" },
  { id: 10, title: "اپلیکیشن چت و پیام‌رسان", image: "https://picsum.photos/400/300?random=10", category: "اپلیکیشن", team: "تیم مسیج" },
  { id: 11, title: "UI Kit آموزش آنلاین", image: "https://picsum.photos/400/300?random=11", category: "UI/UX", team: "تیم اِدو" },
  { id: 12, title: "وبسایت فروش دوره آموزشی", image: "https://picsum.photos/400/300?random=12", category: "وبسایت", team: "تیم لرن" },
  { id: 13, title: "اپلیکیشن مدیریت وظایف", image: "https://picsum.photos/400/300?random=13", category: "اپلیکیشن", team: "تیم اورگانایزر" },
  { id: 14, title: "UI Kit شبکه اجتماعی", image: "https://picsum.photos/400/300?random=14", category: "UI/UX", team: "تیم سوشال" },
  { id: 15, title: "وبسایت گردشگری", image: "https://picsum.photos/400/300?random=15", category: "وبسایت", team: "تیم تراول" },
  { id: 16, title: "اپلیکیشن موسیقی", image: "https://picsum.photos/400/300?random=16", category: "اپلیکیشن", team: "تیم موزیک" },
  { id: 17, title: "UI Kit اپلیکیشن سلامتی", image: "https://picsum.photos/400/300?random=17", category: "UI/UX", team: "تیم هلث" },
  { id: 18, title: "وبسایت خبری", image: "https://picsum.photos/400/300?random=18", category: "وبسایت", team: "تیم نیوز" },
  { id: 19, title: "اپلیکیشن رزرو هتل", image: "https://picsum.photos/400/300?random=19", category: "اپلیکیشن", team: "تیم هتلینگ" },
  { id: 20, title: "UI Kit فروشگاه آنلاین", image: "https://picsum.photos/400/300?random=20", category: "UI/UX", team: "تیم شاپ" },
];


export const blogItems = [
  {
    id: 1,
    title: 'مقاله شماره 1',
    description: 'این توضیح برای مقاله شماره 1 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=1',
  },
  {
    id: 2,
    title: 'مقاله شماره 2',
    description: 'این توضیح برای مقاله شماره 2 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    id: 3,
    title: 'مقاله شماره 3',
    description: 'این توضیح برای مقاله شماره 3 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=3',
  },
  {
    id: 4,
    title: 'مقاله شماره 4',
    description: 'این توضیح برای مقاله شماره 4 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=4',
  },
  {
    id: 5,
    title: 'مقاله شماره 5',
    description: 'این توضیح برای مقاله شماره 5 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=5',
  },
  {
    id: 6,
    title: 'مقاله شماره 6',
    description: 'این توضیح برای مقاله شماره 6 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=6',
  },
  {
    id: 7,
    title: 'مقاله شماره 7',
    description: 'این توضیح برای مقاله شماره 7 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=7',
  },
  {
    id: 8,
    title: 'مقاله شماره 8',
    description: 'این توضیح برای مقاله شماره 8 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=8',
  },
  {
    id: 9,
    title: 'مقاله شماره 9',
    description: 'این توضیح برای مقاله شماره 9 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=9',
  },
  {
    id: 10,
    title: 'مقاله شماره 10',
    description: 'این توضیح برای مقاله شماره 10 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=10',
  },
  {
    id: 11,
    title: 'مقاله شماره 11',
    description: 'این توضیح برای مقاله شماره 11 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=11',
  },
  {
    id: 12,
    title: 'مقاله شماره 12',
    description: 'این توضیح برای مقاله شماره 12 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=12',
  },
  {
    id: 13,
    title: 'مقاله شماره 13',
    description: 'این توضیح برای مقاله شماره 13 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=13',
  },
  {
    id: 14,
    title: 'مقاله شماره 14',
    description: 'این توضیح برای مقاله شماره 14 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=14',
  },
  {
    id: 15,
    title: 'مقاله شماره 15',
    description: 'این توضیح برای مقاله شماره 15 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=15',
  },
  {
    id: 16,
    title: 'مقاله شماره 16',
    description: 'این توضیح برای مقاله شماره 16 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=16',
  },
  {
    id: 17,
    title: 'مقاله شماره 17',
    description: 'این توضیح برای مقاله شماره 17 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=17',
  },
  {
    id: 18,
    title: 'مقاله شماره 18',
    description: 'این توضیح برای مقاله شماره 18 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=18',
  },
  {
    id: 19,
    title: 'مقاله شماره 19',
    description: 'این توضیح برای مقاله شماره 19 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=19',
  },
  {
    id: 20,
    title: 'مقاله شماره 20',
    description: 'این توضیح برای مقاله شماره 20 است و کاملاً منحصر به فرد می‌باشد.',
    image: 'https://picsum.photos/300/200?random=20',
  },
];