import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Navbar from "../components/ui/navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="max-w-5xl mx-auto">
    <Navbar />
    <Component {...pageProps} />
  </div>

  );
}
