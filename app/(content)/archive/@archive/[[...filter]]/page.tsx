import { NewsList } from "@/components/NewsList/news-list";
import Link from "next/link";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/action";
import { getNewsList } from "@/lib/news";
import { NewsItem } from "@/types/news"
import classes from "./page.module.css";

interface ParamsProps {
    params: { filter: string[] }
}

export default async function FilteredNewsPage({ params }: ParamsProps) {
    const { filter } = await params;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    const newsList:NewsItem[] = await getNewsList();
    let news: NewsItem[];

    const years = getAvailableNewsYears(newsList);

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(newsList, selectedYear);
    }

    let newsContent = <p> No content </p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if (selectedYear && !years.includes(+selectedYear)) {
        throw new Error('Invalid path:');
    }    


    return (
        <>
            <header className={classes.archiveheader}>
                <ul>
                    {years.map((year) => (
                        <li key={year}><Link href={`/archive/${year}`}>{year}</Link></li>
                    ))}
                </ul>
            </header>
            {newsContent}
            
        </>
    )
}