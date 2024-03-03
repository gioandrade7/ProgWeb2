import type { AppProps } from "next/app";
import AppBar from "@/components/AppBar/AppBar"
import { Fragment } from "react";

import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <AppBar />
      <div style={{ margin: 20 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
