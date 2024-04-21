export const siteMeta = {
  siteTitle: "CUBE",
  siteDesc: "アウトプットしていくサイト",
  siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  siteLocale: "ja_JP",
  siteIcon: "/favicon.png",
  siteImg: "/next.svg",
};

const { siteTitle, siteDesc, siteUrl, siteLocale, siteImg } = siteMeta;

export const ogMeta = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  siteName: siteTitle,
  type: "website",
  locale: siteLocale,
  images: [
    {
      url: `${siteUrl}${siteImg}`,
    },
  ],
};
