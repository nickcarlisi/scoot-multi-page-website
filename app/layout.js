import { Lexend_Deca, Space_Mono } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-space-mono",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

export const metadata = {
  title: {
    default: "Scoot",
    template: "%s | Scoot",
  },
  description:
    "Scoot takes the hassle out of urban mobility. Locate, unlock, and ride scooters in cities around the world.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${lexendDeca.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
