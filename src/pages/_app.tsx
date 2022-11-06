import '@/styles/globals.css';
import Navbar from "../components/ui/navbar";
import { Provider } from 'react-redux';
import { store } from '@/store';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;