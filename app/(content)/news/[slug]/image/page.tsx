import { notFound } from "next/navigation";
import Image from "next/image";
import { getNewsItem } from "@/lib/news";
import { NewsItem } from "@/types/news";

interface DetailNewsPageProps {
    params: { slug?: string };
}

export default async function ImagePage({ params }: DetailNewsPageProps) {
    const { slug } = await params;

    const news: NewsItem = getNewsItem(slug);

    if (!news) {
        notFound();
    }

    return(
        <Image src={`/news/${news.image}`} alt={news.title} width={500} height={500} />
    )
}