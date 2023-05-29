import "@/styles/loader.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { lazy } from "react";
import useLoader from "@/hooks/useLoader";
const Loader = lazy(() => import("@/components/common/Loader"));

export default function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoader(2000);

  return (
    <Provider store={store}>
      <div>{isLoading ? <Loader /> : <Component {...pageProps} />}</div>
    </Provider>
  );
}
