const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

async function scrape(url, element) {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const html = await page.content();
    const $ = cheerio.load(html);
    const titles = [];
    $(element).each((i, title) => {
      titles.push($(title).text());
    });
    return titles;
  } catch (error) {
    console.error(`An error occurred while scraping: ${error.message}`);
    return [];
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = scrape;
