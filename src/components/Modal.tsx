"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { LoaderIcon, MailPlus, X } from "lucide-react";
import { useState } from "react";
import { addUserEmailToProduct } from "@/lib/actions";
import { useToast } from "./ui/use-toast";

interface Props {
  productId: string;
}

const Modal = ({ productId }: Props) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    if(email === "") return toast({ title: "Email is Required 😝" });

    const validateEmail = (email : string) => {
      // Regular expression for basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    if (!validateEmail(email)) {
      toast({ title: "Invalid email address 😱" });
      return;
    }
    

    e.preventDefault();
    setIsSubmitting(true);

    await addUserEmailToProduct(productId, email);

    email !== "" &&
      toast({
        title: "Product Tracked! 🎉",
        description: "You will receive an email when the price drops.",
      });

    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-primary rounded-lg px-2 py-2 hover:bg-primary/90  my-10">
          Track Product
        </AlertDialogTrigger>
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
            <span className="flex items-center justify-center gap-2">
              <MailPlus size={35} />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email"
              />
            </span>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel className="absolute top-5 right-5 hover:bg-accent rounded-full py-1 px-1 ">
              <X size={20} />
            </AlertDialogCancel>
            <AlertDialogCancel onClick={handleSubmit}>
              <div>
                <Button>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Searching...
                      <LoaderIcon className="animate-spin w-5 h-5 ml-1" />
                    </span>
                  ) : (
                    "Track Product"
                  )}
                </Button>
              </div>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default Modal;
