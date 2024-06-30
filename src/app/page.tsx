import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-sky-400 ">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop=shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg text-center">
          A Tool kit for authentication system using Next auth
        </p>
        <div>
          <LoginButton>
            <Button variant="outline" className="font-bold" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
