import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { siteMeta, ogMeta } from "@lib/constants";

const { siteTitle, siteDesc, siteUrl, siteIcon } = siteMeta;

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...ogMeta,
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
  },
  icons: {
    icon: siteIcon,
    apple: siteIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="global_grid">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
