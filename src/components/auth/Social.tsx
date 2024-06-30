"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
interface SocialsProps {}

export const Socials = (props: SocialsProps) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button 
        size="lg" 
        variant="outline" 
        className="w-full hover:shadow-lg" 
        onClick={() => {}}>
        <FcGoogle className="h-7 w-7" />
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="w-full hover:shadow-xl" 
        onClick={() => {}}>
        <FaGithub className="h-7 w-7"/>
      </Button>
    </div>
  );
};
