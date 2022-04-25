import 'styles/index.scss';

import Head from 'next/head';

import useCssMobileHeight from 'hooks/useCssMobileHeight';
import { Provider } from 'react-redux';
import { store } from '../src/redux';

function App({ Component, pageProps }) {
  useCssMobileHeight();

  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} key="main" />
      </Provider>
    </>
  );
}

export default App;
