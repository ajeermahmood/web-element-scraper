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
const scrape = require('web-element-scraper');

async function exampleScrape() {
  try {
    const url = 'https://example.com';
    const element = 'h1'; // The element you want to scrape
    const titles = await scrape(url, element);
    console.log(titles); // Output the scraped text content
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

exampleScrape();
```

### Parameters

- `url` (string): The URL of the web page you want to scrape.
- `element` (string): The HTML element(s) you want to scrape.

### Return Value

- Returns an array of strings containing the text content of the scraped elements.

## Dependencies

- [Puppeteer](https://www.npmjs.com/package/puppeteer): Headless browser automation library.
- [Cheerio](https://www.npmjs.com/package/cheerio): Fast, flexible, and lean implementation of core jQuery for the server.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
