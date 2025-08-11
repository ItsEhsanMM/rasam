import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import SideBar from './Navbar/SideBar';
import { Menu } from 'lucide-react';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <div className="border-primary/30 flex h-20 flex-row-reverse items-center justify-between rounded-lg border px-5">
      <Navbar />
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
