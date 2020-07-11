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
        <div className='row'><div className='col-12 mx-auto text-center d-flex align-items-center  flex-column '><h1 className='mx-auto'>OR</h1></div></div>

        <div className='col-12  col-lg-4 d-flex align-items-lg-center flex-column mx-auto text-center'>
            <div className='mt-4 mb-4 mb-lg-0 d-flex flex-column justify-space-between text-center'>


          <span className='d-flex justify-content-center'>
            <p className='mr-2 mr-lg-3 my-auto'>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-envelope-fill my-auto'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z'
                />
              </svg>
            </p>
            <a href='exemblar@gmail.com'><p className='lead'>exemblar@gmail.com</p></a>
          </span>

          <span className='d-flex text-center justify-content-center'>
            <p className='mr-2 mr-lg-3'>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-telephone-inbound-fill'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z'
                />
              </svg>
            </p>
            <p className='lead'>+234 901 143 02</p>
          </span>
          
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
