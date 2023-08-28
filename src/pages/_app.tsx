
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <link rel="shortcut icon" href="/icon.png" />
      <title>Chetona IT Park</title>

    </Head>
    <Component {...pageProps} />

  </Layout>
}
