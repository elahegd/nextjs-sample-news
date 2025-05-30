import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import { NewsItem } from "@/types/news";
import classes from "./page.module.css";
import { PageParams } from "@/types/news";
import Image from "next/image";

export async function generateMetadata({ params }: PageParams) {
    const pagePramas = await params;
    return {
        title: `${pagePramas.slug}`,
        description: `Browse ${pagePramas.slug}`
    }
}

export default async function DetailNewsPage({ params }: PageParams) {
    const pagePramas = await params;
    
    const news: NewsItem | null = await getNewsItem(pagePramas.slug);

    if (!news) {
        notFound();
    }

    return (
        <article className={classes.newsarticle}>
            <header>
                <Link href={`/news/${news.slug}/image`} className={classes.imagecontainer}>
                    <Image src={news.image} alt={news.title} fill />
                </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
        
    )
}