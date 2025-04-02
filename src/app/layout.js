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
     <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

  <link rel="preconnect" href="https://firebase.googleapis.com" crossOrigin="anonymous" />

  <link
    href="https://fonts.googleapis.com/css2?family=Grey+Qo&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+IT+Moderna:wght@100..400&family=Quicksand:wght@300..700&family=Cinzel+Decorative:wght@400;700;900&display=swap"
    rel="stylesheet"
  />
</head>

      <body className="body" >
        <UserProvider>
        <Providers>{children}</Providers>
        </UserProvider>
        </body>
    </html>
  );
}
