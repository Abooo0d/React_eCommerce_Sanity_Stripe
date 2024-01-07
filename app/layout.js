import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Layout, Navbar } from "@/Components";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abood eCommerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <Head>
            <title>Abood eCommerce Web Site</title>
          </Head>
          <header>
            <Navbar />
          </header>
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
