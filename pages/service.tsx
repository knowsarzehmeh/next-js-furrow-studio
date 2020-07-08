import { useState } from 'react';
import Head from 'next/head';
import { TabContent, TabPane } from 'reactstrap';
import { motion } from 'framer-motion';

import Button from '../components/Button';
import { pageWrapperVariants, onExit } from '../motion/animation';

const Service: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <motion.main
      variants={pageWrapperVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title> Exemblar-services </title>
      </Head>

      {/* Body Section */}
      <section className='container'>
        <div className='row pb-5'>
          <div className='col-12 text-center'>
            <h1 className='tertiary-color'>
              Designing, building great solutions for startups{' '}
              <span className='primary-color'>& </span>companies
            </h1>
            <p className='my-2 my-md-3 my-lg-5  px-lg-5 lead text-center'>
              We work with amazing companies, startups and people to build great
              things
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
              <p className='lead'>
                Helping you achieve <br /> greateness is what we strive for by
                carefully <br /> building amazing solutions
              </p>
            </div>
          </div>
          <div className='row pt-5'>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p className='lead'>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p className='lead'>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p className='lead'>
                Helping you achieve greateness is what we strive for by
                carefully building amazing solutions
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'></div>
              <h5 className='my-4'>Test</h5>
              <p className='lead'>
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
              <div className='tabs text-center overflow-auto'>
                <div
                  className={
                    activeTab === '1'
                      ? 'tabs__title-border tabs__title pr-3'
                      : 'tabs__title pr-3 '
                  }
                  role='button'
                  onClick={() => toggleTab('1')}
                >
                  <p className='font-weight-bold lead-large'>Design</p>
                </div>
                <div
                  className={
                    activeTab === '2'
                      ? 'tabs__title-border tabs__title pr-3'
                      : 'tabs__title pr-3 '
                  }
                  role='button'
                  onClick={() => toggleTab('2')}
                >
                  <p className='font-weight-bold lead-large'>Frontend</p>
                </div>
                <div
                  className={
                    activeTab === '3'
                      ? 'tabs__title-border tabs__title pr-3'
                      : 'tabs__title pr-3 '
                  }
                  role='button'
                  onClick={() => toggleTab('3')}
                >
                  <p className='font-weight-bold lead-large'>Serverside</p>
                </div>
                <div
                  className={
                    activeTab === '4'
                      ? 'tabs__title-border tabs__title pr-3'
                      : 'tabs__title pr-3 '
                  }
                  role='button'
                  onClick={() => toggleTab('4')}
                >
                  <p className='font-weight-bold lead-large'>Deployment</p>
                </div>
              </div>

              {/* Tab contents */}
              <TabContent activeTab={activeTab} className='overflow-y-auto'>
                <TabPane tabId='1'>
                  <div className='row py-5'>
                    <div className='col-12 col-md-4'>
                      <div className='h-100' style={{ background: 'pink' }}>
                        Image Asset 1
                      </div>
                    </div>
                    <div className='col-12 col-md-8'>
                      <p className='lead'>
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
                  <div className='row py-5'>
                    <div className='col-12 col-md-4'>
                      <div className='h-100' style={{ background: 'pink' }}>
                        Image Asset 2
                      </div>
                    </div>
                    <div className='col-12 col-md-8'>
                      <p className='lead'>
                        Nostrum iure maiores reiciendis perspiciatis rerum alias
                        dolore, eos aspernatur omnis adipisci tempora, eaque
                        culpa iusto officiis vero tenetur distinctio! Illo eum
                        nulla similique temporibus qui voluptates in.Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit.
                        Perspiciatis, nulla vero. Minima explicabo unde omnis
                        esse necessitatibus illo debitis error nam accusantium.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId='3'>
                  <div className='row py-5'>
                    <div className='col-12 col-md-4'>
                      <div className='h-100' style={{ background: 'pink' }}>
                        Image Asset
                      </div>
                    </div>
                    <div className='col-12 col-md-8'>
                      <p className='lead'>
                        Minima explicabo unde omnis esse necessitatibus illo
                        debitis error nam accusantium. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Perspiciatis, nulla
                        vero.Nostrum iure maiores reiciendis perspiciatis rerum
                        alias dolore, eos aspernatur omnis adipisci tempora,
                        eaque culpa iusto officiis vero tenetur distinctio! Illo
                        eum nulla similique temporibus qui voluptates in.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId='4'>
                  <div className='row py-5'>
                    <div className='col-12 col-md-4'>
                      <div className='h-100' style={{ background: 'pink' }}>
                        Image Asset
                      </div>
                    </div>
                    <div className='col-12 col-md-8'>
                      <p className='lead'>
                        Illo eum nulla similique temporibus qui voluptates in.
                        Nostrum iure maiores reiciendis perspiciatis rerum alias
                        dolore, eos aspernatur omnis adipisci tempora, eaque
                        culpa iusto officiis vero tenetur distinctio! Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Perspiciatis, nulla vero. Minima explicabo unde omnis
                        esse necessitatibus illo debitis error nam accusantium.
                      </p>
                    </div>
                  </div>
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

            @media (min-width: 1190px) {
              height: 100vh;
            }
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

            &:hover {
              color: $pink;
            }
          }
          .tabs__title-border {
            border-bottom: 4px solid $pink !important;
          }
        `}
      </style>
    </motion.main>
  );
};

export default Service;
