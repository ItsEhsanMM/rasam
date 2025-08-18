import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import './HoverAnimation.css';

import { navlinks } from '@/lib/const';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden w-full items-center justify-between md:flex">
      <div>LOGO</div>
      <NavigationMenu>
        <NavigationMenuList>
          {navlinks.map((link) => {
            return (
              <NavigationMenuItem key={link.name}>
                {link.subMenu ? (
                  <>
                    <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {link.subMenu.map((sub) => (
                          <li key={sub.name} className="w-fit">
                            <NavigationMenuLink asChild>
                              <Link
                                className="hover:text-primary hover-underline-animation"
                                href={link.href}
                              >
                                {sub.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link className="hover:text-primary hover-underline-animation" href={link.href}>
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Link
          href={'tel:+989370814221'}
          className="bg-primary block cursor-pointer rounded-full p-1.5 text-white"
        >
          <PhoneCall strokeWidth={1} />
        </Link>
      </div>
    </nav>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link className="hover:text-primary hover-underline-animation" href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default Navbar;
