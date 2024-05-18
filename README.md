# Element Scraper

Element Scraper is a Node.js package designed to easily scrape text content from HTML elements on web pages. It utilizes Puppeteer for headless browsing and Cheerio for parsing HTML.

## Installation

To install Element Scraper, simply run:

```
npm install web-element-scraper
```

## Usage

Element Scraper provides a simple interface for scraping text from HTML elements on a web page.

```javascript
const { scrape, scrapeMultiple } = require("web-element-scraper");

// Scrape single element
scrape("https://example.com", "h1")
  .then((titles) => {
    console.log("H1 Titles:", titles);
  })
  .catch((error) => {
    console.error(error);
  });

// Scrape multiple elements
scrapeMultiple("https://example.com", ["h1", "h2", "p"])
  .then((results) => {
    console.log("Scraped Data:", results);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Parameters

- `url` (string): The URL of the web page you want to scrape.
- `element / elements` (string / [string]): The HTML element(s) you want to scrape.

### Return Value

- Returns an array of strings containing the text content of the scraped elements.

## Dependencies

- [Puppeteer](https://www.npmjs.com/package/puppeteer): Headless browser automation library.
- [Cheerio](https://www.npmjs.com/package/cheerio): Fast, flexible, and lean implementation of core jQuery for the server.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
