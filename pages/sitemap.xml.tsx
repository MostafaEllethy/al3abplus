import { GetServerSideProps } from "next";
import { fetchCategories } from "../lib/fetch-categories";
import { CATEGORY_BASE_PATH, GAME_BASE_PATH } from "../constants";
import { fetchGames } from "../lib/fetch-games";

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://al3abplus.com";

  const staticPages = ["contact", "privacy-policy", "search"].map(
    (staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    }
  );
  const categoriesPages = (await fetchCategories()).map(
    (x) => `${CATEGORY_BASE_PATH}/${x.path}`
  );

  const gamesPages = (await fetchGames()).map(
    (x) => `${GAME_BASE_PATH}/${x.path}`
  );

  const dynamicPages = categoriesPages
    .concat(gamesPages)
    .map((path) => `${baseUrl}${path}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[baseUrl, ...staticPages, ...dynamicPages]
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
