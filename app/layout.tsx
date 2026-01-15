import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Base URL for production - update this when you have your Render URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Synkub - Desarrollo de Software Profesional | Web, Móvil & Cloud",
    template: "%s | Synkub",
  },
  description: "Synkub es tu aliado en desarrollo de software a medida. Creamos aplicaciones web, móviles, APIs y soluciones cloud. Consulta gratuita. +50 proyectos entregados.",
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "aplicaciones móviles",
    "desarrollo de apps",
    "software a medida",
    "desarrollo React",
    "desarrollo Next.js",
    "desarrollo Node.js",
    "APIs REST",
    "consultoría tecnológica",
    "empresa de software Perú",
    "desarrollo de aplicaciones Lima",
    "programación profesional",
    "sistemas empresariales",
    "transformación digital",
    "Synkub",
  ],
  authors: [{ name: "Synkub", url: siteUrl }],
  creator: "Synkub",
  publisher: "Synkub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Synkub - Desarrollo de Software Profesional",
    description: "Transformamos ideas en productos digitales de alto impacto. Desarrollo web, aplicaciones móviles y soluciones empresariales con tecnología de vanguardia.",
    url: siteUrl,
    siteName: "Synkub",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Synkub - Desarrollo de Software Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synkub - Desarrollo de Software Profesional",
    description: "Transformamos ideas en productos digitales de alto impacto. Desarrollo web, móvil y soluciones cloud.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@synkub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code when available
    // google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#organization`,
        "name": "Synkub",
        "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com',
        "logo": {
          "@type": "ImageObject",
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/logo.png`,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contacto@synkub.com",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English"]
        },
        "sameAs": [
          "https://github.com/Jhayro91/Synkub",
          "https://linkedin.com/company/synkub"
        ],
        "description": "Empresa de desarrollo de software profesional especializada en aplicaciones web, móviles y soluciones cloud."
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#website`,
        "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com',
        "name": "Synkub",
        "description": "Desarrollo de Software Profesional",
        "publisher": {
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#organization`
        },
        "inLanguage": "es-PE"
      },
      {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#webpage`,
        "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com',
        "name": "Synkub - Desarrollo de Software Profesional",
        "isPartOf": {
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#website`
        },
        "about": {
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#organization`
        },
        "description": "Transformamos ideas en productos digitales de alto impacto. Desarrollo web, aplicaciones móviles y soluciones empresariales.",
        "inLanguage": "es-PE"
      },
      {
        "@type": "Service",
        "serviceType": "Software Development",
        "provider": {
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synkub.onrender.com'}/#organization`
        },
        "areaServed": {
          "@type": "Country",
          "name": "Peru"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Desarrollo de Software",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo Web"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aplicaciones Móviles"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Backend & APIs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud & DevOps"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sistemas Empresariales"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Consultoría Tecnológica"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
