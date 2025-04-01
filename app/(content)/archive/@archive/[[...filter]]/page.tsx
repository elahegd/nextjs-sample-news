import { Suspense } from "react";
import { NewsList } from "@/components/NewsList/news-list";
import Link from "next/link";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/action";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news"
import classes from "./page.module.css";

interface ParamsProps {
    params: { filter: string[] }
}
interface FilteredNewsByYearProps {
    year: string,
    newsList: NewsItem[]
}
function FilteredNewByYear({ year, newsList }: FilteredNewsByYearProps) {
    let news: NewsItem[];
    if (year) {
        news = getNewsForYear(newsList, year);
    }

    let newsContent = <p> No content </p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }
    return newsContent;
}

export default async function FilteredNewsPage({ params }: ParamsProps) {
    const { filter } = await params;
    const selectedYear = filter?.[0];
    const newsList: NewsItem[] = await getNewsList();
    const years = getAvailableNewsYears(newsList);

    return (
        <>
            <header className={classes.archiveheader}>
                <ul>
                    {years.map((year) => (
                        <li key={year}><Link href={`/archive/${year}`}>{year}</Link></li>
                    ))}
                </ul>
            </header>
            <Suspense fallback={<p className="text-center">Loading...</p>}>
                 <FilteredNewByYear year={selectedYear} newsList={newsList} />
            </Suspense>
        </>
    )
}