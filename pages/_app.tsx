// import App from 'next/app'
import SEO from '../seo.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Router from 'next/router';
import nprogress from 'nprogress';
import '../public/scss/app.scss';

import Default from '../components/layout/Default';

let progressBarTimeout = null;

const clearProgressBarTimeout = () => {
  if (progressBarTimeout) {
    clearTimeout(progressBarTimeout);
    progressBarTimeout = null;
  }
};

const startProgressBar = async () => {
  clearProgressBarTimeout();
  progressBarTimeout = await setTimeout(() => {
    nprogress.start();
  }, 500);

  setTimeout(() => {
    stopProgressBar();
  }, 1000);
};

const stopProgressBar = () => {
  clearProgressBarTimeout();
  nprogress.done();
};

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  startProgressBar();
});

const initialState: any = {
  activeNav: false,
};

//pure reducer function
const Reducer = (state, action) => {
  switch (action.type) {
    case 'MUTATE_ACTIVE_NAV':
      return { ...state, activeNav: action.payload };
    case 'CLOSE':
      return { ...state, activeNav: false };
    case 'FLIP_ACTIVE_NAV':
      return { ...state, activeNav: !state.activeNav };
    default:
      return state;
  }
};

import React, { createContext, useReducer } from 'react';

const MyApp = ({ Component, pageProps, router }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const Layout = Default;

  return (
    <>
      <Head>
        {/* <title>
          Exemblar - Brand Indentity, User Experience Design & Web & App
          development
        </title> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DefaultSeo {...SEO} />

      <Context.Provider value={[state, dispatch]}>
        <Layout path={router.route}>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    </>
  );
};
export const Context = createContext(initialState);
export default MyApp;
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
