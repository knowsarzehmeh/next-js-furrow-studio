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
  <div className='bg-img'></div>
      <div className="row text-center">
        <div className="col-12">
          <div className="px-lg-5">
            <h1 className="m-auto text-center text-white px-lg-5 ">
              Creating experiences that matters is what Exemblar is all about
            </h1>
           
          
          </div>
        </div>
      </div>

     
      </div>

      <div className='container justify-content-center'>
      <div className="row  flex-row padding-container">
        <div className="col-12 col-lg-4">
            <h3 className="m-auto ">
            Brands are like stories, some you remember some you don't. We can make sure your story is never forgotten. 
            </h3>

           
        </div>
        <div className="col-12 col-lg-8 mt-3 mt-lg-0">
           

            <p className="m-auto lead font-weight-bold">
            Exemblar is a web design , app development and related technologies company that creates a platform for business
owners, individuals, group of companies etc that are ready to take their business, ideas or
passion to a greater level of connection with the world at large. Our team is made up of
professional in diverse fields of software development and graphic designing, working together
to create and make every imaginations a reality.
            </p>
           
        </div>

        
      </div>

      <div className='row mt-5'>
        <div className='col'>
          <h3 className='mx-auto text-center'>Our Services</h3>
        </div>
      </div>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-9 col-md-4 col-lg-3'>
          <h2 className='mx-auto text-center team-heading'>Management Team</h2>
          </div>
        </div>

        <div className='row d-flex justify-content-center '>
            <div className='col-11 col-md-8 col-lg-10 m-auto '>
              <div className='card-deck flex-column flex-lg-row'>
                <div className='card card-wat mb-md-1'>
                  <div className='card-body d-flex flex-column justify-content-center p-lg-3 mx-auto align-items-center'>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Meduoye Oluwafemi</h3>
                    <p className='lead font-weight-bold text-center'>CEO / SOFTWARE ENGINEER</p>
                  
                  </div>
                </div>

                <div className='card card-wat text-center mb-md-1'>
                <div className='card-body d-flex flex-column justify-content-center p-lg-3 mx-auto align-items-center'>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Nosazeme Glory</h3>
                    <p className='lead font-weight-bold text-center'>CTO  / SOFTWARE ENGINEER</p>
                  
                  </div>
                </div>

                <div className='card card-wat mb-md-1'>
                <div className='card-body d-flex flex-column justify-content-center p-lg-3 mx-auto align-items-center'>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Stephanie Nsa</h3>
                    <p className='lead font-weight-bold text-center'>MARKETING & CONTENT MANAGER/ SOCIAL MEDIA EXPERT</p>
                  
                  </div>
                </div>

                <div className='card card-wat mb-md-1'>
                <div className='card-body d-flex flex-column justify-content-center p-lg-3 mx-auto align-items-center'>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Johnson Chidubem</h3>
                    <p className='lead font-weight-bold text-center'>PRODUCT DESIGNER/ UI/UX / SOFTWARE ENGINEER</p>
                  
                  </div>
                </div>

                <div className='card card-wat mb-md-1'>
                <div className='card-body d-flex flex-column justify-content-center p-lg-3 mx-auto align-items-center'>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Emmanuel Adegeye</h3>
                    <p className='lead font-weight-bold text-center'>PRODUCT DESIGNER/ GRAPHICS & MOTION ENGINEER</p>
                  
                  </div>
                </div>

                <div className='card card-wat mb-md-1'>
                <div className='card-body d-flex flex-column justify-content-center p-lg-3 mx-auto align-items-center'>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Meduoye Oluwasegun</h3>
                    <p className='lead font-weight-bold text-center'>PARTNER / AGILE & SCRUM MASTER</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>

  
    

      <style jsx>{`
 .icon-div {
          border-radius: 50%;
          height: 190px;
          width: 190px;
          margin: 10px;
          // background-color: #fff;
        }
        
      .card-wat {
        border : none;
      }
      .team-heading:after {
        content: '';
    border-bottom: 5px solid var(--pink);
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    align-content: unset;
    padding-top: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    margin: 0 25px;
      }


      .text-white {
        color: white !important;
        /* z-index: 100000; */
        margin: auto;
      }

      .bg-img {
         min-width: -webkit-fill-available !important;
         position:absolute;
         min-height: -webkit-fill-available !important;
       
        background-image: url(/images/spiral.png);
        background-repeat: no-repeat;
        background-size: cover;
        /* z-index: 10; */
         
      }
      .position-about {
        background: transaparent !important;
        z-index:23;
        min-height: -webkit-fill-available !important;
        /* background-image: url(/images/spiral.png) no-repeat center; */
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
          padding : 3rem 0 3rem 0;
        }

        @media (max-width: 600px) {
          
        }
      `}</style>
       <style jsx global>{`
       .header-container {
          background: transparent !important;
       }
            .margin-top {
            margin-top: 0px !important;
            z-index: 300;
            }

            .margin-top-nav {
              margin-top: 8rem !important;

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
        .logo.nav{
          width: 70px;
          height: 25px;
          left: 0;
          background: url(/images/exemblar-logo-white.png) no-repeat center;
          background-size: contain;
          }

         .hamburger-color {
          color: #ffffff !important
        }
        
       .header-container.background-black {
        background: var(--deepBlue);
      }
      .position-fix {
        position: relative;
        height: -webkit-fill-available !important;
      }
      .font-logo {
        color: white !important;
      }

        .header-container.box-shadow-shade {
         box-shadow: 0 0 2.8rem var(--deepBlue);
          background: var(--deepBlue) !important;
        z-index: 23 !important;
        }

    

      `}</style>
     

    </motion.div>
  );
}
