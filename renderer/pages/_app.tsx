import React from 'react'
import type { AppProps } from 'next/app'

if(process.env.NODE_ENV === "development") {
    require('../../mock')
}
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp