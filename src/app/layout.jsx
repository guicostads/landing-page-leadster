import { Header } from "./components/Header";
import { TopLogo } from "./components/TopLogo";
import { VideosNav } from "./components/VideosNav";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import BottomContent from "./components/BottomContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopLogo />
        <Header />
        <div className="w-full h-full flex items-center justify-center max-md:px-3">
          {children}
        </div>
        <BottomContent />
        <Footer />
      </body>
    </html>
  );
}
