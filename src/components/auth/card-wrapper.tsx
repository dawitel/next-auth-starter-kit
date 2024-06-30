"use client";

import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Socials } from "@/components/auth/Social";
import { BackButton } from "./Back-button";

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

export const CardWrapper = ({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader>
        <Header lable={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          href={backButtonHref}
          lable={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
};
