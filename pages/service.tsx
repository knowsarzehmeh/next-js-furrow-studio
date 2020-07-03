import Head from 'next/head';

// import '~/components/Button';
import Button from '../components/Button';

const Service: React.FunctionComponent = () => {
  return (
    <main>
      <Head>
        <title> Exemblar-services </title>
      </Head>

      {/* Body Section */}
      <section className='container'>
        <div className='row pb-5'>
          <div className='col-12 text-center'>
            <h1 className='secondary-color'>
              Designing, building great solutions for startups{' '}
              <span className='primary-color'>& </span>companies
            </h1>
            <p className='font-weight-bold my-5'>
              We work with amazing companies, startups and people <br /> to
              build great things
            </p>
            <Button label='Projects' />
          </div>
        </div>
      </section>
      <section className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center mt-5'>
              <h1>
                Our Workflow <br /> Designed for you.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
