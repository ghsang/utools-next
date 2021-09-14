import React from 'react';
import { appWithTranslation } from 'next-i18next';
import 'styles.css';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default appWithTranslation(MyApp);