import { Suspense } from "react";
import { NewsList } from "@/components/NewsList/news-list";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news";

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