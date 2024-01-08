import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteContext from '../context/SiteContext'

/* export function reportWebVitals(metric:any){
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
} */
export default function App({ Component, pageProps }: AppProps) {
  return <main><SiteContext><Component {...pageProps} /></SiteContext></main>
}
