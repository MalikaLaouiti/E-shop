import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app';


function MyApp({ Component , pageProps } :AppProps) {
  return (
    <React.Fragment>
      
      <Head>
          <title>eShop</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      
      <div className="container">
        <Component {...pageProps} />
      </div>
      

    </React.Fragment>
  )
}

export default MyApp