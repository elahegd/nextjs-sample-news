'use client'
import { useRouter } from "next/navigation";
import classes from './backdrop.module.css';

export default function ModalBackDrop() {
    const route = useRouter();
    return(
        <div className={classes.modalbackdrop} onClick={route.back} />
    )
}