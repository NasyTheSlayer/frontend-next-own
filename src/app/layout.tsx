import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { MainProvider } from "@/providers/mainProvider";

export const metadata: Metadata = {
  title: "Vespera",
  description:
    "A realm of exploration where ideas converge and possibilities unfold. In this dynamic space, creativity thrives, fostering connections and inspiring innovation. Vespera invites you to discover the extraordinary in the everyday, embracing the beauty of serendipity and the power of imagination. Join us on a journey beyond the horizon, where each moment is a chance to illuminate the path ahead.",
  applicationName: "Vespera",
  keywords: [
    "Innovation",
    "Creativity",
    "Exploration",
    "Connection",
    "Inspiration",
    "Imagination",
    "Possibilities",
    "Serendipity",
  ],
  creator: "Nazar Levkovych",
  publisher: "Vespera",

  metadataBase: new URL("https://vespera.com"),

  appleWebApp: {
    title: "Vespera",
    statusBarStyle: "black-translucent",
  },

  openGraph: {
    title: "Vespera",
    description:
      "A realm of exploration where ideas converge and possibilities unfold. In this dynamic space, creativity thrives, fostering connections and inspiring innovation. Vespera invites you to discover the extraordinary in the everyday, embracing the beauty of serendipity and the power of imagination. Join us on a journey beyond the horizon, where each moment is a chance to illuminate the path ahead.",
    url: "https://vespera.com",
    siteName: "Vespera",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#18191C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
