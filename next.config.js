/** @type {import('next').NextConfig} */
const nextConfig = {
 async redirects() {
  return [
   ...["/maths/:slug*"].map((source) => ({
    source,
    destination: "/fiches/maths/:slug*",
    permanent: true,
   })),
   ...["/i2d/:slug*"].map((source) => ({
    source,
    destination: "/fiches/i2d/:slug*",
    permanent: true,
   })),
   ...["/physique-chimie/:slug*"].map((source) => ({
    source,
    destination: "/fiches/physique-chimie/:slug*",
    permanent: true,
   })),
  ];
 },
};

module.exports = nextConfig;
