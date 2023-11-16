import '../styles/globals.css'
import RootLayout from '../layout'


import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return (
      <RootLayout font={roboto.className}>
        <Component {...pageProps} />
      </RootLayout>
  )
}
