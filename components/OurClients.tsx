import React from 'react';

import Button from './Button';

const Default = (props) => {
  return (
    <div className='container'>
      <div className='row py-3'>
        <div className='col'>
          <h2 className='tertiary-color text-center mb-5'>
            You will be in good company
          </h2>
          <div className='col d-flex justify-content-center mb-5'>
            <img
              className=' client-logo mx-2 mx-lg-4 img-fluid'
              src='/images/eve-icon-logo-black.png'
            />
            <img
              className='client-logo mx-2 mx-lg-4 img-fluid'
              src='/images/masta.png'
            />
          </div>
          <p className='lead text-center'>
            Trust us to take your ideation to realisation
          </p>

          <Button foreLabel='Contact us' backLabel="Let's work together" />
        </div>
      </div>

      <style jsx>{`
        .client-logo {
          max-width: 200px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Default;
