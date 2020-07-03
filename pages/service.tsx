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
      <section className='workflow'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center mt-5'>
              <h1 className='my-4 workflow__header'>
                Our Workflow <br /> Designed for you.
              </h1>
              <p>
                Helping you achieve <br /> greateness is what we strive for by
                carefully <br /> building amazing solutions
              </p>
            </div>
          </div>
          <div className='row pt-5'>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='technologies'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-center'>Technology</h1>
            </div>
          </div>
          <div className='row'>
            <div className='tabs'>Tabs Goes in here</div>
          </div>
        </div>
      </section>

      {/* StyleSheet */}
      <style jsx>
        {`
          $grey: #eef3fa;
          .workflow {
            background-color: $grey;
            height: 100vh;
          }
          .workflow__header {
            line-height: 1.4;
          }

          .workflow__sub-section-avatar {
            background: #fff;
            border: 1px solid $grey;
            border-radius: 50%;
            height: 50px;
            width: 50px;
          }
        `}
      </style>
    </main>
  );
};

export default Service;
