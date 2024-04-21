import { ogMeta } from "@lib/constants";
import type { Metadata } from "next";

const pageMetadata = {
  pageTitle: "About",
  pageDesc: "About page",
  pagePath: "/about",
};

const { pageTitle, pageDesc, pagePath } = pageMetadata;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    ...ogMeta,
    title: pageTitle,
    description: pageDesc,
    url: pagePath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
