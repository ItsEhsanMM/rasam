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
