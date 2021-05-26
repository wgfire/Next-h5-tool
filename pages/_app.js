import "../styles/globals.scss";
import "antd-mobile/dist/antd-mobile.css";
function MyApp({ Component, pageProps }) {
  console.log(pageProps,'props')
  return <Component {...pageProps} />;
}

export default MyApp;
