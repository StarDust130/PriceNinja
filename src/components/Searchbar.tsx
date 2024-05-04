"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";
import { useToast } from "./ui/use-toast";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    // Check if the hostname includes 'amazon.com', 'amazon.', 'flipkart.com', or 'flipkart.'
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("flipkart.com") ||
      hostname.includes("flipkart.") ||
      hostname.endsWith("flipkart") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink)
      return toast({
        title: "Invalid URL 🚫",
        description: "Please enter a valid Amazon or Flipkart product URL",
      });

    try {
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
      toast({
        title: "Product found! ✅",
        description: `Product has been added to the database. `,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex w-full mx-auto mt-20 justify-center max-w-sm  md:max-w-2xl items-center space-x-4"
      onSubmit={handleSubmit}
    >
      <Input
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        type="text"
        placeholder="Enter product link"
      />
      <Button
        className="searchbar-btn"
        disabled={searchPrompt === ""}
        type="submit"
      >
        {isLoading ? (
          <span className="flex items-center">
            Searching...
            <LoaderIcon className="animate-spin w-5 h-5 ml-1" />
          </span>
        ) : (
          "Search"
        )}
      </Button>
    </form>
  );
};

export default Searchbar;
