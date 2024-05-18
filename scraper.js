const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

/**
 * Scrapes text content of a specific DOM element from a given URL.
 *
 * @param {string} url - The URL of the web page to scrape.
 * @param {string} element - The DOM element to scrape text from (e.g., 'h1', 'p').
 * @returns {Promise<string[]>} - A promise that resolves to an array of text content of the specified element.
 */
async function scrape(url, element) {
  let browser;
  try {
    // Launch a new browser instance
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the given URL and wait until the network is idle
    await page.goto(url, { waitUntil: "networkidle2" });

    // Get the page content as HTML
    const html = await page.content();

    // Load the HTML into cheerio for parsing
    const $ = cheerio.load(html);

    // Initialize an array to hold the text content
    const titles = [];

    // Extract text content from each occurrence of the specified element
    $(element).each((i, title) => {
      titles.push($(title).text());
    });

    // Return the array of text content
    return titles;
  } catch (error) {
    // Log any errors that occur and return an empty array
    console.error(`An error occurred while scraping: ${error.message}`);
    return [];
  } finally {
    // Ensure the browser is closed to free up resources
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Scrapes text content of multiple DOM elements from a given URL.
 *
 * @param {string} url - The URL of the web page to scrape.
 * @param {string[]} elements - An array of DOM elements to scrape text from (e.g., ['h1', 'h2', 'p']).
 * @returns {Promise<Object>} - A promise that resolves to an object where keys are element names and values are arrays of text content.
 */
async function scrapeMultiple(url, elements) {
  let browser;
  try {
    // Launch a new browser instance
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the given URL and wait until the network is idle
    await page.goto(url, { waitUntil: "networkidle2" });

    // Get the page content as HTML
    const html = await page.content();

    // Load the HTML into cheerio for parsing
    const $ = cheerio.load(html);

    // Initialize an object to hold the results
    const results = {};

    // Iterate over each element in the elements array
    for (const element of elements) {
      // Initialize an array to hold the text content for the current element
      const texts = [];

      // Extract text content from each occurrence of the current element
      $(element).each((i, elem) => {
        texts.push($(elem).text());
      });

      // Add the text content array to the results object under the current element's key
      results[element] = texts;
    }

    // Return the results object
    return results;
  } catch (error) {
    // Log any errors that occur and return an empty object
    console.error(`An error occurred while scraping: ${error.message}`);
    return {};
  } finally {
    // Ensure the browser is closed to free up resources
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = { scrape, scrapeMultiple };
