import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const BASE_URL = 'https://www.delhi-escorts.com';

const staticUrls = [
  { url: '', changefreq: 'daily', priority: 1.0 },
  { url: 'login', changefreq: 'monthly', priority: 0.5 },
  { url: 'register', changefreq: 'monthly', priority: 0.5 },
  { url: 'dashboard', changefreq: 'weekly', priority: 0.8 },
  { url: 'create-listing', changefreq: 'weekly', priority: 0.8 },
  // Add more static URLs as needed
];

const dynamicUrls = [
  { url: 'listings/1', changefreq: 'weekly', priority: 0.8 },
  { url: 'listings/2', changefreq: 'weekly', priority: 0.8 },
  // Add more dynamic URLs as needed
];

async function generateSitemap() {
  const urls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(({ url, changefreq, priority }) => {
      return `<url>
  <loc>${BASE_URL}/${url}</loc>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
    })
    .join('\n')}
</urlset>`;

  const sitemapPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('Sitemap generated at', sitemapPath);
}

generateSitemap();