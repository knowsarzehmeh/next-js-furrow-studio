import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from 'reactstrap';

import { onExit } from '../motion/animation';

export default function Home() {
  return (
    <motion.div exit={onExit} >
      <section className="container-fluid secondary-bg position-about">
      <Head>
        <title>exemblar contact us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row text-center">
        <div className="col-12">
          <div className="d-flex justify-content-center flex-column align-items-center text-black">
            <h1 className="m-auto text-center text-white">
              Creating experiences that matters
            </h1>
           
          
          </div>
        </div>
      </div>
      </section>

  
    

      <style jsx>{`
      .text-white {
        color: white !important;
        z-index: 100000;
        margin: auto;
      }
      .position-about {
        height: -webkit-fill-available !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

        .max-height {
            /* height : 100vh!important; */
        }

        @media (max-width: 600px) {
          
        }
      `}</style>
       <style jsx global>{`

        html,
        body,
        #app,
        main {
          // min-height: 100%;
          background: var(--blue);
        }
        .hamburger {
        color: white !important;
        }
       .background-black {
        background: var(--blue) !important;
      }
      .position-fix {
        position: relative;
        height: -webkit-fill-available !important;
      }
      .font-logo {
        color: white !important;
      }

      .logo {
        padding-top: -3rem !important;
        width: 70px;
        height: 25px;
        left: 0;
        background: url(/images/exemblar-logo-white.png) no-repeat scroll center top;
        background-size: contain;

      }

  
        
        .header-container.box-shadow-shade {
          // box-shadow: 0 0 1.8rem transparent;
          background: var(--deepBlue) !important;
        //   z-index: 21 !important;
        }

    

      .margin-top {
        margin-top: 0px !important;
      }
      `}</style>
     

    </motion.div>
  );
}
