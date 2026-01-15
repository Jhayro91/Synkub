import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synkub - Desarrollo de Software Profesional",
  description: "Contacta con Synkub para solicitar cotizaciones y agendar reuniones para tus proyectos de software. Desarrollo moderno, eficiente y personalizado.",
  keywords: "desarrollo software, cotizaciones, reuniones, proyectos software, Synkub, Jhayro Chavez",
  authors: [{ name: "Jhayro Chavez" }],
  openGraph: {
    title: "Synkub - Desarrollo de Software Profesional",
    description: "Contacta con Synkub para solicitar cotizaciones y agendar reuniones para tus proyectos de software.",
    url: "https://synkub.com", // placeholder
    siteName: "Synkub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synkub - Desarrollo de Software Profesional",
    description: "Contacta con Synkub para solicitar cotizaciones y agendar reuniones para tus proyectos de software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Synkub",
              "url": "https://synkub.com",
              "logo": "https://synkub.com/logo.png", // placeholder
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "jhayro.chavez@synkub.com",
                "contactType": "customer service"
              },
              "sameAs": [
                // add social media if any
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
