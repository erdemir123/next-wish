/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"], // kullanmak istediğiniz resim kaynaklarını buraya ekleyin
  },
};

module.exports = nextConfig;
