import { Suspense } from "react";
import { NewsList } from "@/components/NewsList/news-list";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news";

export async function generateMetadata() {
    const news: NewsItem[] = await getNewsList();
    const numberOfNews = news.length; 
    return {
        title: `Browse all ${numberOfNews} news`,
        description: 'Browse allNews'
    }
}

async function NewsListLoader() {
    const news: NewsItem[] = await getNewsList();
    return <NewsList news={news} />;
}


export default function NewsPage() {
    return (
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <NewsListLoader />
        </Suspense>
    )
}