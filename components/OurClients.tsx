import React from 'react';
import { useRouter } from 'next/router';
import Button from './Button';

const Default = (props) => {
  const router = useRouter();
  return (
    <div className='container'>
      <div className='row py-3'>
        <div className='col '>
          <h2 className='tertiary-color text-center mb-5'>
            You will be in good company
          </h2>
          <div className='col d-flex justify-content-center mb-5 overflow-auto'>
            <img
              className=' client-logo mx-2 mx-lg-4 img-fluid'
              src='/images/eve-icon-logo-black.png'
            />

            <img
              className=' client-logo mx-2 mx-lg-4 img-fluid'
              src='https://www.tamoimages.com/logo.svg'
            />
             <img
              className=' client-logo mx-2 mx-lg-4 img-fluid'
              src='https://rep-365.com/images/Untitled-2.png'
            />

            <img
              className='client-logo mx-2 mx-lg-4 img-fluid'
              src='/images/masta.png'
            />
          </div>
          <p className='lead text-center'>
            Trust us to take your ideation to realisation
          </p>

          <Button
                foreLabel='Get In Touch'
                backLabel='Contact Us'
                clickHandler={() => router.push('/contact')}
              />
        </div>
      </div>

      <style jsx>{`

// Extra small devices (portrait phones, less than 576px)
          @media (max-width: 575.98px) {  }

          // Small devices (landscape phones, less than 768px)
          @media (max-width: 767.98px) {  
            .client-logo {
              max-width: 40px !important;
              height: 20px !important;
            }
          }

          // Medium devices (tablets, less than 992px)
          @media (max-width: 991.98px) { 
            .client-logo {
              max-width: 100px !important;
              height: 30px !important;
            }

           }

          // Large devices (desktops, less than 1200px)
          @media (max-width: 1199.98px) { 
           
           }
        .client-logo {
          max-width: 200px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Default;
