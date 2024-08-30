import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Quattrocento } from "next/font/google";

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  variable: "--font-quattrocento",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={`  ${inter.variable} ${quattrocento.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
