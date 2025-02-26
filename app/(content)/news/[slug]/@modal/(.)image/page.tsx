import { notFound } from "next/navigation";
import Image from "next/image";
import ModalBackDrop from "@/components/Modal/backdrop";
import { getNews } from "@/lib/news";
import { NewsItem } from "@/types/news";
import classes from "./page.module.css";

interface DetailNewsPageProps {
    params: { slug?: string };
}

export default async function InterceptedImagePage({ params }: DetailNewsPageProps) {
    const { slug } = await params;

    const news: NewsItem = getNews(slug);

    if (!news) {
        notFound();
    }

    return (
        <>
            <ModalBackDrop />
            <dialog className={classes.modal} open>
                <div className={classes.fullscreenimage}>
                    <Image src={`/news/${news.image}`} alt={news.title} width={500} height={500} />
                </div>
            </dialog>

        </>
    )
}