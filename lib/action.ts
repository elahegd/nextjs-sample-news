import { NewsItem } from "@/types/news";

export function getAvailableNewsYears(newsList: NewsItem[]): number[] {
    const years = newsList.reduce((years: number[], news) => {
        const year: number = new Date(news.date).getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
        return years;
    }, []);
    return years.sort((a, b) => b - a);
}

export function getNewsForYear(newsList: NewsItem[], year: string): NewsItem[] {
    return newsList.filter((news) => new Date(news.date).getFullYear() === +year)
}

export function getLatestNews(newsList: NewsItem[]): NewsItem[] {
    return newsList.slice(0, 3);
}