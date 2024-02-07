import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Roboto({ weight: ["100", "400", "700"], subsets: ["latin"] });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider className={inter.className}>
        <Component {...pageProps} />
      </NextUIProvider>
    </QueryClientProvider>
  );
}
