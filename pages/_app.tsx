import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteContext from '../context/SiteContext'
import {Roboto,Rowdies} from "@next/font/google"
const roboto=Roboto({
    style:['normal'],
    weight:['400','700'],
     variable:'--font-roboto',
      subsets:['latin']
    })
    const rowdies = Rowdies({
      weight: ['400'],
      style: ['normal'],
      subsets: ['latin'],
      variable: '--font-rowdies',
    })
/* export function reportWebVitals(metric:any){
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
} */
export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${roboto.variable} ${rowdies.variable}`}><SiteContext><Component {...pageProps} /></SiteContext></main>
}
