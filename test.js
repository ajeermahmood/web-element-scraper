const { scrape, scrapeMultiple } = require("./scraper");

scrape(
  "https://medium.com/feedium/how-to-medium-a-complete-beginners-guide-to-the-writing-platform-3ce8af8e95cc",
  "h1"
)
  .then((titles) => {
    console.log(titles);
  })
  .catch((error) => {
    console.error(error);
  });

scrapeMultiple(
  "https://medium.com/feedium/how-to-medium-a-complete-beginners-guide-to-the-writing-platform-3ce8af8e95cc",
  ["h1", "h2", "p"]
)
  .then((texts) => {
    console.log(texts);
  })
  .catch((error) => {
    console.error(error);
  });
