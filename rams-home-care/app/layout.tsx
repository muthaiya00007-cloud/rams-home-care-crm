import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Ram's Home Care | Best Home Nursing Services in Tamil Nadu",

  description:
    "Ram's Home Care provides professional Home Nursing, Patient Care, Elder Care, Baby Care and ICU Care services at your doorstep 24×7 across Tamil Nadu.",

  keywords: [
    "Ram's Home Care",
    "Home Nursing Services",
    "Nurse at Home",
    "Patient Care Services",
    "Elder Care Services",
    "Baby Care Services",
    "ICU Care at Home",
    "Trichy Home Nursing",
    "Dindigul Home Nursing",
    "Tamil Nadu Home Care",
  ],

  authors: [
    {
      name: "Ram's Home Care",
    },
  ],

  creator: "Ram's Home Care",

  metadataBase: new URL(
    "https://rams-home-care.vercel.app"
  ),

  verification: {
    google: "Y5fN53DlpDwJfM06TTGM0YuX88MC3mNsO65YJPVwc1E",
  },

  openGraph: {
    title:
      "Ram's Home Care | Trusted Home Healthcare Services",

    description:
      "Professional home nursing and patient care services with qualified caregivers across Tamil Nadu.",

    url:
      "https://rams-home-care.vercel.app",

    siteName:
      "Ram's Home Care",

    type:
      "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}