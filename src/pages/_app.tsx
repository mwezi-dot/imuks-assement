import type { AppProps } from 'next/app';// Import Ant Design styles
import '../app/globals.css'; // Import your global CSS
import '../styles/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
