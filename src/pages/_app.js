// pages/_app.js
import "../styles/globals.css";
import { AppRouter } from "../components/AppRouter";

function MyApp({ Component, pageProps }) {
  return (
    <AppRouter>
      <Component {...pageProps} />
    </AppRouter>
  );
}

export default MyApp;
