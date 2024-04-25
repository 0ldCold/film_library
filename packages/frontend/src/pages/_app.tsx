import "../shared/styles/reset.scss";
import { AppProps } from "next/app";
import React, { FC } from "react";
import I18nProvider from "../appFsd/i18n/i18nProvider";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <I18nProvider>
    <Component {...pageProps} />
  </I18nProvider>
);

export default WrappedApp;
