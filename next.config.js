/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "3.googleusercontent.com", "lh3.googleusercontent.com"] // kullanmak istediğiniz resim kaynaklarını buraya ekleyin
  },
};

module.exports = nextConfig;
