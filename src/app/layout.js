import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HarmonyHeals",
  description: "Tune into wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body" >
        <UserProvider>
        <Providers>{children}</Providers>
        </UserProvider>
        </body>
    </html>
  );
}
