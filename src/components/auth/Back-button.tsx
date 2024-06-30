"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  lable: string;
}

export const BackButton = ({ href, lable }: BackButtonProps) => {
  return (
    <Button className="font-normal w-full" variant="link" asChild>
      <Link href={href}>{lable}</Link>
    </Button>
  );
};
