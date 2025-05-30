import { NewsItem } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import classes from './news-list.module.css';
import { ImageLoader } from "./image-loader";

interface NewsListProps {
    news: NewsItem[];
}

interface configImage {
    src: string,
    quality: string,
    width: string
}

const imageLoader = (config: configImage) => {
    const urlStarted = config.src.split("upload/")[0];
    const urlEnd = config.src.split("upload/")[1];
    const transformation = `w_200,q_${config.quality}`;
    return `${urlStarted}upload/${transformation}/${urlEnd}`;
}
export function NewsList({ news }: NewsListProps) {

    return (
        <ul className={classes.newslist}>
            {news.map((newsItem: NewsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`} className={classes.imagecontainer}>
                        {/* <Image loader={imageLoader} src={newsItem.image} alt={newsItem.title} fill quality={50} /> */}
                        <ImageLoader src={newsItem.image} alt={newsItem.title} />
                    </Link>
                    <span>{newsItem.title}</span>
                </li>
            ))}
        </ul>
    )
}