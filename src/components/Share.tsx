"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  XIcon,
} from "react-share";
import { Button } from "./ui/button";
import { Share2, X } from "lucide-react";

const Share = ({ url }: any) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-blue-300 hover:bg-blue-400 mt-3 px-2 py-2 rounded-lg text-black">
            <Share2 size={20} />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-normal text-center">
              Share this product link with everyone 😏
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex justify-center flex-wrap gap-10 items-center my-3 ">
              <FacebookShareButton url={url}>
                <FacebookIcon size={40} />
              </FacebookShareButton>
              <TwitterShareButton url={url}>
                <XIcon size={40} />
              </TwitterShareButton>
              <LinkedinShareButton url={url}>
                <LinkedinIcon size={40} />
              </LinkedinShareButton>
              <RedditShareButton url={url}>
                <RedditIcon size={40} />
              </RedditShareButton>
              <WhatsappShareButton url={url}>
                <WhatsappIcon size={40} />
              </WhatsappShareButton>
              <TelegramShareButton url={url}>
                <TelegramIcon size={40} />
              </TelegramShareButton>
            </div>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Share;
