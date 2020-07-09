import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from 'reactstrap';

import { pageWrapperVariants,  } from '../motion/animation';
// variants={pageWrapperVariants}
// initial='initial'
// animate='animate'
// exit='exit'
// className='container'
export default function Home() {
  return (
    <motion.div variants={pageWrapperVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    className=''>
      <section>
      <Head>
        <title>exemblar contact us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className='container-fluid tertiary-bg position-about'>
      <div className="row text-center">
        <div className="col-12">
          <div className="">
            <h1 className="m-auto text-center text-white">
              Creating experiences that matters
            </h1>
           
          
          </div>
        </div>
      </div>

     
      </div>

      <div className='container justify-content-center'>
      <div className="row  flex-row padding-container">
        <div className="col-4">
            <h3 className="m-auto ">
              Creating experiences that matters
            </h3>

           
        </div>
        <div className="col-8">
           

            <p className="m-auto lead-large font-weight-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, rerum eum similique quam dignissimos repudiandae, odio saepe nulla necessitatibus iusto nihil, quia excepturi sunt culpa officiis aperiam veritatis enim soluta.
            </p>
           
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
        min-height: -webkit-fill-available !important;
        height: 100vh;
        display: flex;
      flex-direction:column;
        justify-content: center;
        align-items: center;
      }

        .max-height {
            /* height : 100vh!important; */
        }

        .padding-container{
          padding : 10rem 0 10rem 0;
        }

        @media (max-width: 600px) {
          
        }
      `}</style>
       <style jsx global>{`
            .margin-top {
            margin-top: 0px !important;
            }

        html,
        body,
        #app,
        main {
          // min-height: 100%;
          // background: var(--blue);
        }
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          background-color: #ffffff !important;

        }

         .hamburger-color {
          color: #ffffff !important
        }
       .background-black {
        background: var(--deepBlue) !important;
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

    

      `}</style>
     

    </motion.div>
  );
}
