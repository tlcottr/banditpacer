import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";
import "../styles/theme.scss";
import "../styles/reset.scss";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component forcedTheme="dark" {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
