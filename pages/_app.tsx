import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteContext from '../context/SiteContext'
import Head from 'next/head'
import Script from "next/script"
import TiktokPixel from 'tiktok-pixel';
/* export function reportWebVitals(metric:any){
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
} */
export default function App({ Component, pageProps }: AppProps) {
  TiktokPixel.init( 'CJP96PJC77U1G7J3MO8G' )
/* 	TiktokPixel.track('ClickButton') */
  return <> <Head> <meta name="facebook-domain-verification" content="esfie7810pj6f3jpp8wjwmtzzludkc" />
 
 </Head><main><SiteContext><Component {...pageProps} /></SiteContext></main></>
}
