import { Phone, X } from 'lucide-react';
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/ui/drawer';
import Link from 'next/link';
import { navlinks } from '@/lib/const';
import { DialogTitle } from '@radix-ui/react-dialog';

const SideBar = () => {
  return (
    <DrawerContent className="w-80 px-5">
      <DrawerClose className="mt-5 flex justify-end">
        <X className="size-5" />
      </DrawerClose>
      <DrawerHeader className="px-4 pt-0 pb-6">
        <DialogTitle className="sr-only">LOGO</DialogTitle>
        <Link href={'/'} className="flex gap-x-2 text-xl font-bold text-blue-400">
          <div>LOGO</div>
          <h1>نوشته لوگو</h1>
        </Link>
      </DrawerHeader>
      <ul className="space-y-5">
        {navlinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              className="hover:text-secondary text-text flex items-center gap-x-2 text-sm transition-all"
              href={link.href}
            >
              <Icon className="size-4.5" />
              {link.name}
            </Link>
          );
        })}
      </ul>
      <div className="h-4 border-b-2 border-dotted border-black/15" />
      <DrawerFooter className="mt-5 px-2">
        <div>
          <div>
            <Link className="text-text flex items-center gap-x-2 text-sm" href={'tel:+9812345678'}>
              <Phone className="size-4.5" />
              مشاوره رایگان :{' '}
              <span className="text-primary hover:text-primary/50 pt-1 transition-all">
                031123456
              </span>
            </Link>
          </div>
        </div>
      </DrawerFooter>
    </DrawerContent>
  );
};
export default SideBar;
