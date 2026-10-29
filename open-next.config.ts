import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// OpenNext Cloudflare Pages Configuration for Next.js 16 App Router
export default defineCloudflareConfig({
  incrementalCache: 'dummy',
  // Edge runtime optimization
  enableCacheInterception: true,
});
