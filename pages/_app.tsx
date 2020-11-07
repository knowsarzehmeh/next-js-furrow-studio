// import App from 'next/app'
import SEO from '../seo.config';
import Head from 'next/head';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';


import Layout from '../layouts/default';

// Global States
import { GlobalProvider } from '../context/globalContext';

const MyApp = ({ Component, pageProps, router }) => {
 

  return (
    <>
      <Head>
        {/* <title>
          Exemblar - Brand Indentity, User Experience Design & Web & App
          development
        </title> */}
        <link rel='icon' href='/fav-icon.png' />
      </Head>
      <DefaultSeo {...SEO} />

        <GlobalProvider>
         <AnimatePresence exitBeforeEnter>
            <Layout>
                  <Component {...pageProps} key={router.route} />
            </Layout>
          </AnimatePresence>
        </GlobalProvider>
    
    </>
  );
};

export default MyApp;

