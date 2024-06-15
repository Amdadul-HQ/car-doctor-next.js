import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "Car Repairing works shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        <main className="min-h-[calc(100vh-330px)]">
        {children}
        </main>
          <Footer/>
        </body>
    </html>
  );
}
