import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import SideBar from './Navbar/SideBar';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className="border-primary/30 flex h-20 flex-row-reverse items-center justify-between rounded-lg border px-5">
      <div className="text-primary flex gap-x-2 text-xl font-bold">
        <h1>LOGO</h1>
        <h1>نوشته لوگو</h1>
      </div>
      <Drawer direction="right" modal={false}>
        <DrawerTrigger className="md:hidden">
          <Menu />
        </DrawerTrigger>

        <div className="fixed inset-0 z-40 bg-black/50" data-overlay />
        <SideBar />
      </Drawer>
    </div>
  );
};
export default Header;
