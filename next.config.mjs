//next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: `
                default-src 'self' https://*.dialectics.center;
                script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.dialectics.center https://js.sentry-cdn.com https://browser.sentry-cdn.com https://cdn.jsdelivr.net https://clerk.dialectics.center;
                connect-src 'self' https://*.dialectics.center https://scdn.clerk.com https://segapi.clerk.com https://*.ingest.sentry.io;
                img-src 'self' data:;
                style-src 'self' 'unsafe-inline';
              `.replace(/\s{2,}/g, ' ').trim()
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
