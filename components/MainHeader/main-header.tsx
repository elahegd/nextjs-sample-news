import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.jpg";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <header className={classes.mainheader}>
            <Link href="/" className={classes.logo}>
                <Image src={logo} alt="logo" />
            </Link>

            <ul>
                <li><NavLink href="/news">News</NavLink></li>
                <li><NavLink href="/archive">Archive</NavLink></li>
            </ul>
        </header>
    )
}