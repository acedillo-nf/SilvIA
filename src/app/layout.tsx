import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";



const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarIA",
  description: "Tu asistente de ventas con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body className={jakarta.className}>
        <script
  src="https://unpkg.com/react-stackai@latest/dist/vanilla/vanilla-stackai.js"
  data-project-url="https://www.stack-ai.com/embed/5f170297-4afc-4479-a588-0e3fbc570bdb/919714d4-886f-4e65-baca-634b9135cb4f/67112253ee625f7b81b0946f">
</script>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
