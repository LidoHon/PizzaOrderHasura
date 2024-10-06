import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { client } from "../utils/client";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="cupcake">
      <Provider value={client}>
        <div className="container mx-auto max-w-5xl">
          <Header />
          <Component {...pageProps} />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
