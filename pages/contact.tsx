import Head from 'next/head';
import { motion } from 'framer-motion';

import { pageWrapperVariants } from '../motion/animation';
import { useEffect , useState } from 'react';
import ContactUsForm from '../components/ContactUsForm';

import dynamic from 'next/dynamic'

const FORM = dynamic(
  () => import('../components/ContactUsForm'),
  { ssr: false }
)

export default function Contact() {
  
  const [state, setstate] = useState(true)

    // useEffect(()=> {
    //   setstate(true)
    // },[])
  // useEffect(()=> {
  //   embedEmail();
  // })

  // function embedEmail() { 
  //     var qs,js,q,s,d=document,
  //     gi=d.getElementById, ce=d.createElement, 
  //     gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/";
  //     if(!gi.call(d,id)){ js=ce.call(d,"script"); 
  //     js.id=id; js.src=b+"embed.js";
  //     q=gt.call(d,"script")[0]; 
  //     q.parentNode.insertBefore(js,q) } }


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

      <div className='row mb-5'>
        <div className='col-12 lead mx-auto d-flex  justify-content-center'>
            <FORM />
      
        
        </div>
      </div>

      <style jsx>{``}</style>

      <style jsx global>{`
      .footer__FooterWrapper {
        display: none !important;
      }
      `}</style>
    </motion.section>
  );
}
