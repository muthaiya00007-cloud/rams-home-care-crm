import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitehomecare.in"),

  title: {
    default: "Elite Home Care & Nursing",
    template: "%s | Elite Home Care & Nursing",
  },

  description:
    "Elite Home Care & Nursing provides trusted Home Nursing, Patient Care, Elder Care, Baby Care, ICU Care, Bedridden Patient Care and Home Healthcare Services in Madurai, Trichy, Salem, Thanjavur and across Tamil Nadu. Call 99944 75537 or 99944 75243.",

  keywords: [
    "Elite Home Care",
    "Home Nursing",
    "Patient Care",
    "Elder Care",
    "Baby Care",
    "ICU Care",
    "Bedridden Patient Care",
    "Home Healthcare",
    "Madurai",
    "Trichy",
    "Salem",
    "Thanjavur",
    "Tamil Nadu",
  ],

  authors: [{ name: "Elite Home Care & Nursing" }],
  creator: "Elite Home Care & Nursing",
  publisher: "Elite Home Care & Nursing",
  applicationName: "Elite Home Care & Nursing",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Elite Home Care & Nursing",
    description:
      "Professional Home Nursing Services in Madurai, Trichy, Salem, Thanjavur and All Over Tamil Nadu.",
    type: "website",
    locale: "en_IN",
    siteName: "Elite Home Care & Nursing",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elite Home Care & Nursing",
    description:
      "Home Nursing & Patient Care Services Across Tamil Nadu.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
