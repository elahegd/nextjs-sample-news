import { NewsList } from "@/components/NewsList/news-list";
import { getLatestNews } from "@/lib/action";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news";

export default async function LatestNews() {
    const news: NewsItem[] = await getNewsList();
    const latestNews = getLatestNews(news);
    return (
        <>
            <h1>Latest News</h1>
            <NewsList news={latestNews} />
        </>
    );
}