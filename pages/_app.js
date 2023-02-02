import React from "react";
import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";
import "../styles/theme.scss";
import "../styles/reset.scss";
import Layout from "@/components/Layout";
import UnitToggleProvider from "components/UnitToggleProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme="dark">
      <UnitToggleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UnitToggleProvider>
    </ThemeProvider>
  );
}
