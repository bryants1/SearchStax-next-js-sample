import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitchburg State University Search",
  description: "Search academic programs, faculty, news, and university resources at Fitchburg State University",
  keywords: "Fitchburg State University, search, academics, programs, faculty, students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://static.searchstax.com/studio-js/v4/css/feedbackWidget.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
