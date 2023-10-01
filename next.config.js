/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "m.media-amazon.com",
      "i.rtings.com",
      "www.notebookcheck.net",
      "techplatoon.com.bd",
      "media.steelseriescdn.com",
      "cdn.mos.cms.futurecdn.net",
    ],
  },
};

module.exports = nextConfig;
