import Footer from 'components/footer';
import Header from 'components/Header';
import 'styles/globals.css';
import 'styles/layout.css';

function MyApp({ Component, pageProps }) {
  /**
   * Use This Condition to Layout per Page
   */
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>

  );
}

export default MyApp;
