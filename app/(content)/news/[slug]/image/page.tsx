import { notFound } from "next/navigation";
import Image from "next/image";
import { getNewsItem } from "@/lib/news";
import { NewsItem, PageParams } from "@/types/news";

export async function generateMetadata({ params }: PageParams) {
    const pagePramas = await params;
    return {
        title: `${pagePramas.slug}`,
        description: `Browse ${pagePramas.slug}`
    }
}
export default async function ImagePage({ params }: PageParams) {
    const pagePramas = await params;

    const news: NewsItem | null = getNewsItem(pagePramas.slug);

    if (!news) {
        notFound();
    }

    return(
        <Image src={news.image} alt={news.title} width={500} height={500} />
    )
}