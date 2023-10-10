/* eslint-disable react/jsx-no-undef */

import { store, wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session} store={store}>
      <>{getLayout(<Component {...pageProps} />)}</>
      <ToastContainer />
    </SessionProvider>
  );
}
wrapper.withRedux(App);
