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
              We <span className="primary-color">design</span> <span className="other">&</span> <span className="primary-color">build</span> digital <br></br> experiences{' '}
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

    
      <style jsx>{`
       
       .hrd-1,
        {

       text-align:center;  
         font-size:50px;
         line-height:60px;
         font-weight:bold;
         margin-bottom:30px;
         color:#303090;

       }

       .hrd-2{
        text-align: center;
       }
       
       .p-1,
       .p-2 {
         text-align: center;
         color:black;
         font-weight:700;
         font-size:18px;
         line-height:32px;
         margin-bottom:35px;

       }
       
       .ex-btn {
         display: block;
         margin-left: auto;
         margin-right: auto;
         color: white;
         background-color: #303090;
         border: transparent;
         border-radius: 10px;
         height: 60px;
         width: 200px;
       }
       
       .bac-back {
         background-color: #eef3fa;
         width: 100%;
         min-height: 55vh;
       }
       
     
       .line {
         width: 100%;
         border-top: transparent;
         border-left: transparent;
         border-right: transparent;
         border-bottom: 0.2px solid #70707056;
       }
       
       li {
         list-style: none;
       }
       

      `}</style>

{/*
      <style jsx global>{`
      
      `}</style>
*/}

    </div>
  );
}
