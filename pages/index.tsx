import Head from 'next/head';
import { Button } from 'reactstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          {' '}
          Exemblar - Brand Indentity, User Experience Design & Web & App
          development
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/**start*/}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h3 className='hrd-1'>
              We design & build digital <br></br> experiences{' '}
            </h3>
            <p className='p-1'>
              <span>
                <img src='' />
              </span>
              We design, build and launch websites and products that <br></br>{' '}
              are simple, beautiful and helps businesses grow.
            </p>

            <button className='ex-btn'>
              Discover Our Process <img src='' />
            </button>

            <img src='' />
          </div>
        </div>
      </div>
      {/**end */}

      {/**second section */}

      <div className='bac-back'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'></div>
          </div>
        </div>
      </div>

      {/*end*/}

      {/**third part */}

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h3 className='hrd-2'>
              You'll be in good <br></br> company
            </h3>

            <p className='p-2'>
              We build great products that help <br></br>
              businesses grow
            </p>

            <img src='' />
            <img src='' />
            <img src='' />
          </div>
        </div>
      </div>

      {/**end */}

      {/*
      <style jsx>{`
       
      `}</style>

      <style jsx global>{`
      
      `}</style>

*/}
    </div>
  );
}
