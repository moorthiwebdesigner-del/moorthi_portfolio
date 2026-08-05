import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({

  plugins: [

    react(),

    tailwindcss(),


    VitePWA({

      registerType: "autoUpdate",


      includeAssets: [
        "favicon.png",
        "resume.pdf"
      ],


      manifest: {

        name: "Moorthi Dev | Full Stack Developer",

        short_name: "Moorthi Dev",

        description:
          "Professional Full Stack Developer Portfolio - React, PHP, MySQL, WordPress, Shopify and AI Solutions.",


        start_url: "/",

        scope: "/",


        display: "standalone",


        orientation: "portrait",


        theme_color: "#2563eb",

        background_color: "#ffffff",


        icons: [

          {
            src: "/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },


          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },


          {
            src: "/maskable-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }

        ],


        shortcuts: [

          {
            name: "Projects",
            short_name: "Projects",
            url: "/#projects",
            icons:[
              {
                src:"/pwa-192.png",
                sizes:"192x192"
              }
            ]
          },


          {
            name: "Contact",
            short_name: "Contact",
            url: "/#contact",
            icons:[
              {
                src:"/pwa-192.png",
                sizes:"192x192"
              }
            ]
          },


          {
            name: "Skills",
            short_name: "Skills",
            url: "/#skills",
            icons:[
              {
                src:"/pwa-192.png",
                sizes:"192x192"
              }
            ]
          }

        ]

      },


      workbox: {

        cleanupOutdatedCaches: true,

        runtimeCaching: [

          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,

            handler: "CacheFirst",

            options: {

              cacheName: "google-fonts",

              expiration: {

                maxEntries: 10,

                maxAgeSeconds: 60 * 60 * 24 * 365

              }

            }

          }

        ]

      }


    })

  ]

});