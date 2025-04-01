import { NewsList } from "@/components/NewsList/news-list";
import { getLatestNews } from "@/lib/action";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news";
import { Suspense } from "react";

export default async function LatestNews() {
    const news: NewsItem[] = await getNewsList();
    const latestNews = getLatestNews(news);
    return (
        <Suspense fallback={<p className="text-center">Latest Loading...</p>}>
            <h1>Latest News</h1>
            <NewsList news={latestNews} />
        </Suspense>
    );
}