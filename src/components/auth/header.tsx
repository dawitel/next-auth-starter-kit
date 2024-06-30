import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const fort = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  lable: string;
}

export const Header = ({ lable }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full">
      <h1 className={cn("text-3xl font-bold")}>🔐 Auth</h1>
      <p className="text-muted-foreground  text-sm">{lable}</p>
    </div>
  );
};
