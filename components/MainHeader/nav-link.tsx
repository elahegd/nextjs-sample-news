'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './main-header.module.css';

interface NavLinkProps {
    href: string,
    children: string
}

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();

    return (
        <Link href={href} className={path.includes(href) ? classes.active : undefined}>{children}</Link>
    )
}