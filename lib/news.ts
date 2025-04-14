import { NewsItem } from '@/types/news';
import sql from 'better-sqlite3';

const db = sql('news.db');

export async function getNewsList() {
    db.prepare(`
        CREATE TABLE IF NOT EXISTS news (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT NOT NULL UNIQUE,
            title TEXT NOT NULL,
            image TEXT NOT NULL,
            date TEXT NOT NULL,
            content TEXT NOT NULL
        )
    `).run();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newsList = db.prepare('SELECT * FROM news').all() as NewsItem[] | [];
    return newsList || [];
}
export function getNewsItem(slug: string): NewsItem | null {
    const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as NewsItem | null;
    return newsItem || null;
}

export async function storeNews(news: NewsItem) {
    const stmt = db.prepare(`INSERT INTO news (id, slug, title, image, date, content)
        VALUES (?, ?, ?, ?, ?, ?)`);

    await new Promise((resolve) => setTimeout(resolve, 1500))

    return stmt.run(news.id, news.slug, news.title, news.image, news.date, news.content);
}
