"use client";

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
import Link from "next/link";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

const Modal = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <div className="flex  items-center space-x-2">
            <Link className="text-2xl font-bold " href="/">
              Price<span className="text-red-500">Ninja</span>
            </Link>
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Stay Updated with product pricing alerts right in your inbox!
            </AlertDialogTitle>
            <AlertDialogDescription>
              Never miss a deal, subscribe to our newsletter now.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <Label htmlFor="email">Email address</Label>
            <Input type="email" id="email" placeholder="Email" />
          </AlertDialogDescription>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
            <AlertDialogAction>
              <Button>Track Product</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default Modal;
