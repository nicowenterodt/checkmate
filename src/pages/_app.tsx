import "./globals.css";
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Topnavigation from "@/components/topnavigation.module";

const inter = Inter({ subsets: ['latin'] })
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col items-center justify-start`}>
      <Topnavigation />
      <div className="container px-2.5 mt-16">
        <Component {...pageProps} />
      </div>
    </main>
  )
}
