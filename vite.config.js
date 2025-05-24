import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    VitePWA({
      disable: mode === 'development',
      registerType: 'prompt',
      manifest: {
        name: 'School Website',
        short_name: 'School',
        description: 'School Management System',
        theme_color: '#000000',
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        scope: '/',
        categories: ['education', 'productivity'],
        prefer_related_applications: false,
        shortcuts: [
          {
            name: 'Student Portal',
            url: '/student',
            description: 'Access Student Portal'
          },
          {
            name: 'Teacher Portal',
            url: '/teacher',
            description: 'Access Teacher Portal'
          }
        ],
        icons: [
          {
            src: '/images/logo-main.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/images/logo-main.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        screenshots: [
          {
            src: '/images/school.jpg',
            sizes: '1280x720',
            type: 'image/jpeg',
            form_factor: 'wide',
            label: 'School Homepage'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              }
            }
          }
        ],
        cleanupOutdatedCaches: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg']
    })
  ]
}))
