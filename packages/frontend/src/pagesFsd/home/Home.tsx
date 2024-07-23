import Head from "next/head";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("test")}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <ul>
          <li>
            <Link href={"/films"}>/films</Link>
          </li>
          <li>
            <Link href={"/users"}>/users</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
