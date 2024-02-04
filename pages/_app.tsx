import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { Roboto } from "next/font/google";

const inter = Roboto({ weight: ['100','400','700'], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className={inter.className}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
