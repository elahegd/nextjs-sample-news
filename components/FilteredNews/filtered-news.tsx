"use client"
import { NewsList } from "@/components/NewsList/news-list";
import { getNewsForYear } from "@/lib/action";
import { NewsItem } from "@/types/news"
import { useParams } from 'next/navigation'

interface FilteredNewsByYearProps {
    newsList: NewsItem[]
}

export default function FilteredNewByYear({ newsList }: FilteredNewsByYearProps) {
    const params = useParams<{ filter: string }>()
    const selectedYear = params.filter?.[0];
    let news: NewsItem[] = [];
    if (selectedYear) {
        news = getNewsForYear(newsList, selectedYear);
    }

    let newsContent = <p> No content </p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }
    return newsContent;
}