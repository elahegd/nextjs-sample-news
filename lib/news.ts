import sql from 'better-sqlite3';

const db = sql('news.db');

export function getNewsList() {
    
    return db.prepare('SELECT * FROM news').all(); 
}

export function getNews(slug: string) {
    return db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
}
