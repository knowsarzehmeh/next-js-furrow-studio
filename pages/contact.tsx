import Head from 'next/head';
import { motion } from 'framer-motion';

import { pageWrapperVariants } from '../motion/animation';

export default function Contact() {
  return (
    <motion.section
      variants={pageWrapperVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='container'
    >
      <Head>
        <title>exemblar contact us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='row'>
        <div className='col-12'>
          <div className='d-flex justify-content-center flex-column secondary-color'>
            <h1 className='mx-auto text-center'>
              <span className=''>You're</span>
              <span className=''> welcome to get in touch </span>
              <span className='text-black d-none d-lg-inline primary-color'>{' &'}</span>
            </h1>
            <h1 className='primary-color mx-auto d-lg-none text-center'>
              {'&'}
            </h1>
            <h1 className='mx-auto text-center'>
              <span className='text-black'>say </span>{' '}
              <span className='secondary-color'>"hello"</span>
            </h1>
            {/* <h2 className="secondary-color mx-auto">
                            <span>experiences </span> </h2> */}
          </div>
        </div>
      </div>
      <div className='row mt-2 mt-lg-3'>
        <div className='col-12 lead'>
          <div className='mx-auto d-flex justify-content-center flex-column'>
            <p className='mx-auto lead text-center'>
              Do you have an enquiry to make or questions to ask, please fill
              the form below <br /> And we will get right back to you
            </p>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </motion.section>
  );
}
