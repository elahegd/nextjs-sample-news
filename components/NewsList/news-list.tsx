import { NewsItem } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import classes from './news-list.module.css';

interface NewsListProps {
    news: NewsItem[];
}

export function NewsList({ news }: NewsListProps) {

    return (
        <ul className={classes.newslist}>
            {news.map((newsItem: NewsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}>
                        <Image src={`/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                    </Link>
                    <span>{newsItem.title}</span>
                </li>
            ))}
        </ul>
    )
}