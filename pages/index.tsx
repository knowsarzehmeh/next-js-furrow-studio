import { useRef, useEffect, MutableRefObject } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { useIntersection } from 'react-use';
// import { Button } from 'reactstrap';
import Button from '../components/Button';
import OurClients from '../components/OurClients';
import Testimonial from '../components/Testimonial';

import { pageWrapperVariants } from '../motion/animation';

import {
  headingOneVariants,
  subheadingVariants,
  headerButtonVariant,
  serviceSectionVariants,
  childCardVariants,
} from '../motion/home';

export default function Home() {
  const sectionRef: MutableRefObject<any> = useRef(null);
  const animation: AnimationControls = useAnimation();
  const intersection: IntersectionObserverEntry = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  useEffect(() => {
    intersection && intersection.intersectionRatio < 0.4
      ? animation.start('initial')
      : animation.start('animate');
  }, [animation, intersection]);

  return (
    <motion.div
      variants={pageWrapperVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/**start*/}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <motion.h1
              variants={headingOneVariants}
              className='text-center secondary-color'
            >
              We <span className=''>design</span>{' '}
              <span className='primary-color'>&</span>{' '}
              <span className=''>build</span> digital <br></br> experiences{' '}
            </motion.h1>

            <div className='d-flex flex-row justify-content-center'>
              <img
                src='images/arrow.svg'
                className='img-fluid d-none d-md-inline-block arrow mr-lg-3'
              />

              <motion.p
                variants={subheadingVariants}
                className='lead text-center d-none d-lg-block px-lg-5'
              >
                We design, build and launch websites and products that are
                <br /> simple, beautiful and helps businesses grow.
              </motion.p>

              <p className='lead text-center my-3 my-lg-2 d-block d-lg-none px-lg-5'>
                We design, build and launch websites and products that are
                simple, beautiful and helps businesses grow.
              </p>
            </div>

            <motion.div variants={headerButtonVariant}>
              <Button
                foreLabel='Discover Our Process'
                backLabel='Enter'
                clickHandler={() => console.log('i was tapped')}
              />
            </motion.div>
            {/* <button className="ex-btn">
              Discover Our Process <img src="" />
            </button> */}

            <img src='images/imgcenter.png' className='img-fluid imgcenter' />
          </div>
        </div>
      </div>
      {/**end */}

      {/**second section */}

      <section className='bac-back py-5 my-auto d-flex justify-content-center'>
        <div className='container-fluid px-md-5 px-lg-5 services-flex'>
          <div className='row mb-3'>
            <div className='col-10 col-lg-9 mx-auto '>
              <motion.h2
                ref={sectionRef}
                variants={subheadingVariants}
                initial='initial'
                animate={animation}
                className='com tertiary-color px-lg-5  mt-5 text-center'
              >
                Reap the benefits of years of learning & experience while
                building succesful products
              </motion.h2>
              <p className='com-1 tertiary-color lead text-center'>
                Using latest Technologies and formal development process <br />
                to give you the best experience
              </p>
            </div>
          </div>

          <div className='row d-flex justify-content-center '>
            <div className='col-11 col-md-8 col-lg-10 m-auto '>
              <div className='card-deck flex-column flex-lg-row'>
                <div className='card card-wat mb-md-4'>
                  <div className='card-body d-flex flex-column justify-content-between p-lg-3 mx-auto align-items-center text-white '>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Websites Design</h3>
                    <p className='lead mx-auto text-center'>
                      We create beautiful responsive and user friendly websites
                      from scratch to portray your business ideas and marketing
                      strategies in a stylish and classy way, that shows the
                      neccessary information using best development techniques
                      you think it and we build it.
                    </p>
                  </div>
                </div>

                <motion.div
                  variants={childCardVariants}
                  initial='initial'
                  animate='animate'
                  className='card card-wat text-center mb-md-4'
                >
                  <div className='card-body card-wat__alternate d-flex flex-column justify-content-between p-lg-3 mx-auto align-items-center text-white '>
                    <div className='icon-div secondary-bg'> </div>
                    <h3>Mobile/Web Application</h3>
                    <p className='lead mx-auto text-center'>
                      Using Conventional Technologies and architecture with the
                      unique logic of the application, combined with a polished
                      Ui/Ux to deliver smooth and fast applications that reached
                      the goals of our clients and wins the hearts of users.
                    </p>
                  </div>
                </motion.div>

                <div className='card card-wat mb-md-4'>
                  <div className='card-body d-flex flex-column justify-content-between p-lg-3 mx-auto align-items-center text-white '>
                    <div className='icon-div primary-bg'> </div>
                    <h3 className='text-center'>Graphics Design & Branding</h3>
                    <p className='lead mx-auto text-center text-white'>
                      Because a good visual representation is key to success of
                      a company we have experts that creates a range of design
                      service such as; logo designs , visual identity packages ,
                      business cards, brochure, catalogues and marketing
                      materials and many more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End of cards */}
          <div className='row d-flex justify-content-center mt-3 text-center'>
            <div className='col-10 col-lg-9 m-auto'>
              <Link href='/service'>
                <button className='btn btn-outline-secondary'>
                  Read about all our services
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="card-wat"> </div>
            </div>
            <div className="col-lg-4 mx-auto">
              <div className="card-wat"></div>
            </div>
            <div className="col-lg-4 mx-auto">
              <div className="card-wat"></div>
            </div>
          </div> */}
        </div>
      </section>

      <section className='my-5 bg-color-offwhite p-2'>
        <h3 className='text-center mt-4 mb-4 px-5'>
          Here are some of the things our clients say about us
        </h3>
        <Testimonial />
      </section>

      <section className='py-5 bac-back'>
        <OurClients />
      </section>
      {/*end*/}

      <style jsx>{`
        // Extra small devices (portrait phones, less than 576px)
        @media (max-width: 575.98px) {
        }

        // Small devices (landscape phones, less than 768px)
        @media (max-width: 767.98px) {
          .icon-div {
            height: 60px !important;
            width: 60px !important;
          }
        }

        // Medium devices (tablets, less than 992px)
        @media (max-width: 991.98px) {
          .icon-div {
            height: 70px !important;
            width: 70px !important;
          }
        }

        // Large devices (desktops, less than 1200px)
        @media (max-width: 1199.98px) {
        }
        .icon-div {
          border-radius: 50%;
          height: 90px;
          width: 90px;
          margin: 20px;
          // background-color: #fff;
        }
        .bg-color-offwhite {
          // background-color: #fbfbfd !important;
          background-image: url('images/team-meeting.jpg');
        }
        .services-flex {
          display: flex;
          justify-content: center;
          //  align-items: center;
          flex-direction: column;
        }
        .hrd-1 {
          text-align: center;
          font-size: 50px;
          line-height: 60px;
          font-weight: bold;
          margin-bottom: 30px;
          //color: #303090;
          margin-top: 50px;
        }

        .hrd-2 {
          text-align: center;
        }

        //.p-1,
        //.p-2 {
        //text-align: center;
        //color: black;
        //font-weight: 700;
        //font-size: 18px;
        // line-height: 32px;
        // margin-bottom: 35px;
        // margin-top: -130px;
        // }

        .ex-btn {
          display: block;
          margin-left: auto;
          margin-right: auto;
          color: white;
          background-color: #303090;
          border: transparent;
          font-weight: bold;
          font-size: 14px;
          height: 60px;
          width: 220px;
          border-radius: 35px;
        }

        .ex-btn:hover {
          display: block;
          margin-left: auto;
          margin-right: auto;
          color: black;
          background-color: #f3356c;
          font-weight: bold;
          font-size: 14px;
          height: 60px;
          width: 220px;
        }

        .bac-back {
          background-color: #edf4ff;
          width: 100%;
          /* min-height: 800px; */
        }

        .arrow {
          width: 51px;
          // margin-left: 240px;
          margin-bottom: 50px;
        }

        .imgcenter {
          width: 1000px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .com {
          //  margin-top: 100px;
        }
        .com-1 {
          margin-top: 30px;
          line-height: 25px;
        }

        .card-wat {
          //  min-height: 450px;
          border: none !important;
          border-radius: 15px;
          background-color: var(--blue);
          box-shadow: 0px 20px 40px 0px rgba(12, 0, 46, 0.06);
        }

        .card-wat__alternate {
          border-radius: 15px;
          background-color: var(--pink) !important;
          box-shadow: 0px 20px 40px 0px rgba(12, 0, 46, 0.06);
        }
      `}</style>

      {/*
      <style jsx global>{`
      
      `}</style>
*/}
    </motion.div>
  );
}
