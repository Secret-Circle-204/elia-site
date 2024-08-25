/** @type {import('next').NextConfig} */
module.exports = {
  // Images configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
          protocol: 'https',
        hostname: 'admin.eliayoussefdesigns.com',
        port: '',
        pathname: '/assets/**'
      },
      {
          protocol: 'http',
          hostname: 'admin.eliayoussefdesigns.com',
          port: '',
          pathname: '/assets/**'
        }
        // {
        //   protocol: 'http',
        //   hostname: 'localhost',
        //   // port: '',
        //   // pathname: '/assets/**'
  
        // }
    ]
  },

  // SVG Support
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  },

  // Modular Imports
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  }

  // API Routes (if needed)
  // apiRoutes: apiRoutes(), // uncomment and configure if you need API routes
}

// Function for API routes (uncomment if needed)
// function apiRoutes() {
//   return {
//     page: {
//       path: '/[slug]',
//       component: 'pages/[slug]/page.jsx',
//     },
//   };
// }

// // next.config.js
// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     // domains: [
//     //   'admin.prestigedesign-egy.com',
//     //   'admin.prestigedesign-egy.com/assets',
//     //   'https://admin.prestigedesign-egy.com'
//     // ], // Add the domain to allowed domains
//     formats: ['image/avif', 'image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'admin.prestigedesign-egy.com', // Include the "/assets" path
//         port: '',
//         pathname: '/assets/**'
//       }
//     ]
//   },
//   // Enable server actions
//   experimental: {
//     serverActions: true
//   },

//   // API Routes
//   apiRoutes: apiRoutes(),

//   // SVG Support
//   webpack (config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack']
//     })

//     return config
//   },

//   // Modular Imports
//   modularizeImports: {
//     '@mui/icons-material': {
//       transform: '@mui/icons-material/{{member}}'
//     }
//   }
// }
// function apiRoutes () {
//   return {
//     page: {
//       path: '/[slug]',
//       component: 'pages/[slug]/page.jsx'
//     }
//   }
// }
