import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Monorepo',
    short_name: 'Monorepo',
    description: 'Monorepo',
    start_url: '/',
    scope: '.',
    display: 'standalone',
    background_color: '#EEEEE',
    theme_color: '#EEEEE',
    icons: [
      {
        src: 'icon.png',
        purpose: 'any',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
