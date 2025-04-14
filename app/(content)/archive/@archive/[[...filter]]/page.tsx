
import { Suspense } from "react";
import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/action";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news"
import classes from "./page.module.css";
import FilteredNewByYear from "@/components/FilteredNews/filtered-news";

export default async function FilteredNewsPage() { 
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
                 <FilteredNewByYear newsList={newsList} />
            </Suspense>
        </>
    )
}