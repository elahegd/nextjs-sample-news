const sql = require('better-sqlite3');
const db = sql('news.db');

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