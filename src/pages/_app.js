import '@/styles/globals.css'
import Nav from './Components/Nav'
export default function App({ Component, pageProps }) {
  return (<>
  <Nav/>
  <Component {...pageProps} /></>)
}
