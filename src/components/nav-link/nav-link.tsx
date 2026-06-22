'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classes from './nav-link.module.css';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  exact?: boolean;
};

export default function NavLink({ href, exact = false, children}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${classes['nav-link']} ${isActive ? classes.active : ''}`}
      
    >
      {children}
    </Link>
  );
}
