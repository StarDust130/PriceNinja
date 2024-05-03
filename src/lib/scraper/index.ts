import * as cheerio from "cheerio";
import axios from "axios";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // BrightData proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (Math.random() * 1000000).toFixed(0);
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectsUnauthorized: false,
  };

  try {
    // Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    // Extract product details
    const title = $("#productTitle").text().trim();
    const price = $("#priceblock_ourprice").text().trim();
    const image = $("#landingImage").attr("src");

    console.log("Title: ", title);
    console.log("Price: ", price);
    console.log("Image: ", image);
    



    // console.log(" Response " + response.data);
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
