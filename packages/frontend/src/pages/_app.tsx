import { AppProps } from "next/app";
import React, { FC } from "react";
import I18nProvider from "../appFsd/i18n/i18nProvider";
import "../shared/styles/reset.scss";
import "../shared/styles/variables.scss";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <I18nProvider>
    <Component {...pageProps} />
  </I18nProvider>
);

export default WrappedApp;
