import { useState } from 'react';
import Head from 'next/head';

// import '~/components/Button';
import { TabContent, TabPane } from 'reactstrap';
import Button from '../components/Button';

const Service: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('1');

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
            {/* </div>
          <div className='row pt-5'> */}
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
          <div className='row py-5'>
            <div className='col-12'>
              <h3 className='text-center'>Technologies</h3>
            </div>
          </div>
          <div className='row'>
            <div className='container'>
              <div className='tabs text-center'>
                <div className='tabs__title pr-3 ' role='button'>
                  <p className='font-weight-bold'>Design</p>
                </div>
                <div
                  className='tabs__title pr-3 tabs__title-border'
                  role='button'
                >
                  <p className='font-weight-bold'>Frontend</p>
                </div>
                <div className='tabs__title pr-3' role='button'>
                  <p className='font-weight-bold'>Serverside</p>
                </div>
                <div className='tabs__title pr-3' role='button'>
                  <p className='font-weight-bold'>Deployment</p>
                </div>
              </div>

              {/* Tab contents */}
              <TabContent activeTab={activeTab}>
                <TabPane tabId='1'>
                  <div className='row py-5'>
                    <div className='col-4'>
                      <div className='h-100' style={{ background: 'pink' }}>
                        Image Asset
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perspiciatis, nulla vero. Minima explicabo unde
                        omnis esse necessitatibus illo debitis error nam
                        accusantium. Nostrum iure maiores reiciendis
                        perspiciatis rerum alias dolore, eos aspernatur omnis
                        adipisci tempora, eaque culpa iusto officiis vero
                        tenetur distinctio! Illo eum nulla similique temporibus
                        qui voluptates in.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId='2'>
                  <p>Tab 2</p>
                </TabPane>
                <TabPane tabId='3'>
                  <p>Tab 3</p>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </section>

      {/* StyleSheet */}
      <style jsx>
        {`
          /* Colors */
          $blue: #303090;
          $pink: #f3356c;
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

          .tabs {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }

          .tabs__title {
            border-bottom: 4px solid $blue;
          }
          .tabs__title-border {
            border-bottom: 4px solid $pink !important;
          }
        `}
      </style>
    </main>
  );
};

export default Service;
