import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import SideBar from './Navbar/SideBar';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className="border-primary/30 flex h-20 items-center justify-between rounded-lg border px-5">
      <div className="text-primary flex gap-x-2 text-xl font-bold">
        <h1>LOGO</h1>
        <h1>نوشته لوگو</h1>
      </div>
      <Drawer direction="right">
        <DrawerTrigger className="md:hidden">
          <Menu />
        </DrawerTrigger>
        <SideBar />
      </Drawer>
    </div>
  );
};
export default Header;
