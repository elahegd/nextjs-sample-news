import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews } from "@/lib/news";
import { NewsItem } from "@/types/news";
import classes from "./page.module.css";

interface DetailNewsPageProps {
    params: { slug?: string };
}

export default async function DetailNewsPage({ params }: DetailNewsPageProps) {
    const { slug } = await params;

    const news: NewsItem = getNews(slug);

    if (!news) {
        notFound();
    }

    return (
        <article className={classes.newsarticle}>
            <header>
                <Link href={`/news/${news.slug}/image`}>
                    <img src={`/news/${news.image}`} alt={news.title} />
                </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
        
    )
}