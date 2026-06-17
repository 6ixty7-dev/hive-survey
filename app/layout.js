import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Hive — Help Us Build Fashion Differently",
  description:
    "Hive is building an occasion-first fashion marketplace. Help us shape a better shopping experience by sharing your preferences.",
  keywords: "Hive, fashion, occasion, marketplace, survey, shopping experience",
  openGraph: {
    title: "Hive — Help Us Build Fashion Differently",
    description:
      "Share your shopping preferences and help us create the perfect fashion experience.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-[var(--bg-primary)] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
