import "./globals.css";
import "../style.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Header from "./components/sections/header/Header";
import FooterSection from "./components/sections/footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "miPata",
  description:
    "Aplicación miPata, la nueva comunidad de mascotas y quienes las amamos",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-icon.png?v=4"],
    shortcut: ["/apple-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={nunito.className}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
