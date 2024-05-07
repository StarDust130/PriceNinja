"use server";

import { EmailContent, EmailProductInfo, NotificationType } from "@/types";
import nodemailer from "nodemailer";

const Notification = {
  WELCOME: "WELCOME",
  CHANGE_OF_STOCK: "CHANGE_OF_STOCK",
  LOWEST_PRICE: "LOWEST_PRICE",
  THRESHOLD_MET: "THRESHOLD_MET",
};

export async function generateEmailBody(
  product: EmailProductInfo,
  type: NotificationType
) {
  const THRESHOLD_PERCENTAGE = 40;
  // Shorten the product title
  const shortenedTitle =
    product.title.length > 20
      ? `${product.title.substring(0, 20)}...`
      : product.title;

  let subject = "";
  let body = "";

  switch (type) {
    case Notification.WELCOME:
      subject = `🎉 Welcome to Price Tracking for ${shortenedTitle} 🚀`;
      body = `
      <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h2 style="color: #007bff;">Welcome to PriceNinja!</h2>
        <p>You are now tracking ${product.title}.</p>
        <p>Here's an example of how you'll receive updates:</p>
        <div style="border: 1px solid #ccc; padding: 10px; background-color: #fff; border-radius: 4px; margin-bottom: 20px;">
          <h3 style="color: #007bff;">${product.title} is back in stock!</h3>
          <p>We're excited to let you know that ${product.title} is now back in stock.</p>
          <p>Don't miss out - <a href="${product.url}" target="_blank" style="text-decoration: none; color: #007bff;">buy it now</a>! 🛍️</p>
          <img src="https://i.ibb.co/pwFBRMC/Screenshot-2023-09-26-at-1-47-50-AM.png" alt="Product Image" style="max-width: 100%; border-radius: 4px; margin-top: 10px;" />
        </div>
        <p>Stay tuned for more updates on ${product.title} and other products you're tracking. 📈</p>
      </div>
    `;
      break;

    case Notification.CHANGE_OF_STOCK:
      subject = `🎉 ${shortenedTitle} is now back in stock! 🛒`;
      body = `
      <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h4 style="color: #007bff;">Hey, ${product.title} is now restocked!</h4>
        <p>Grab yours before they run out again! 🏃‍♂️🏃‍♀️</p>
        <p>See the product <a href="${product.url}" target="_blank" style="text-decoration: none; color: #007bff;">here</a>.</p>
      </div>
    `;
      break;

    case Notification.LOWEST_PRICE:
      subject = `💰 Lowest Price Alert for ${shortenedTitle} 💸`;
      body = `
      <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h4 style="color: #007bff;">Hey, ${product.title} has reached its lowest price ever!! 🤑</h4>
        <p>Grab the product <a href="${product.url}" target="_blank" style="text-decoration: none; color: #007bff;">here</a> now.</p>
      </div>
    `;
      break;

    case Notification.THRESHOLD_MET:
      subject = `🎉 Discount Alert for ${shortenedTitle} 🎁`;
      body = `
      <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h4 style="color: #007bff;">Hey, ${product.title} is now available at a discount more than ${THRESHOLD_PERCENTAGE}%! 🌟</h4>
        <p>Grab it right away from <a href="${product.url}" target="_blank" style="text-decoration: none; color: #007bff;">here</a>.</p>
      </div>
    `;
      break;

    default:
      throw new Error("Invalid notification type.");
  }

  return { subject, body };
}

const transporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  port: 2525,
  auth: {
    user: "priceninjahq@outlook.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
});

export const sendEmail = async (
  emailContent: EmailContent,
  sendTo: string[]
) => {
  const mailOptions = {
    from: "priceninjahq@outlook.com",
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) return console.log(error);

    console.log("Email sent Succesfully ✅: ", info);
  });
};
