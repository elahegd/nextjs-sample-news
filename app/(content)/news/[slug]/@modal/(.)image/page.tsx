import { notFound } from "next/navigation";
import Image from "next/image";
import ModalBackDrop from "@/components/Modal/backdrop";
import { getNewsItem } from "@/lib/news";
import { NewsItem } from "@/types/news";
import classes from "./page.module.css";
import { PageParams } from "@/types/news";

export default async function InterceptedImagePage({ params }: PageParams) {
    const pagePramas = await params;

    const news: NewsItem | null = getNewsItem(pagePramas.slug);

    if (!news) {
        notFound();
    }

    return (
        <>
            <ModalBackDrop />
            <dialog className={classes.modal} open>
                <div className={classes.fullscreenimage}>
                    <Image src={news.image} alt={news.title} width={500} height={500} />
                </div>
            </dialog>

        </>
    )
}