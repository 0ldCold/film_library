import "../shared/styles/reset.scss";
import { AppProps } from "next/app";
import React, { FC } from "react";
import I18nProvider from "../appFsd/i18n/i18nProvider";
import QueryProvider from "src/appFsd/query/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryProvider>
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryProvider>
);

export default WrappedApp;
