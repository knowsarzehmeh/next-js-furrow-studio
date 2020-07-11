import { useState } from 'react';
import Head from 'next/head';
import { TabContent, TabPane } from 'reactstrap';
import { motion } from 'framer-motion';

import Button from '../components/Button';
import OurClients from '../components/OurClients';
import { pageWrapperVariants } from '../motion/animation';

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
            <h1 className='secondary-color'>
              Designing, building great solutions for startups{' '}
              <span className='primary-color'>& </span>companies
            </h1>
            <p className='my-2 my-md-3 my-lg-5  px-lg-5 lead text-center'>
              We work with amazing companies, startups and people to build great
              things
            </p>
            <Button
              foreLabel='Our Projects'
              backLabel='Explore'
              clickHandler={() => console.log('i was tapped')}
            ></Button>
          </div>
        </div>
      </section>
      <section className='workflow'>
        <div className='container '>
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
              <div className='workflow__sub-section-avatar'>
                <img className='w-100' src='/images/idea.svg' alt='idea' />
              </div>
              <h5 className='process__header my-4'>Ideate</h5>
              <p className='lead'>
                Once we have a clear sense of what challenges and needs are, we
                begin the brainstorming ideas to solve those problems.
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'>
                <img
                  className='w-100'
                  src='/images/decision-making.svg'
                  alt='idea'
                />
              </div>
              <h5 className='process__header my-4'>Decide</h5>
              <p className='lead'>
                We carefully analyse and disect every ideas as we go through the
                process of ultimately align on one idea.
                {/* and identify its
                must-have features to build out our minimum viable product. */}
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'>
                <img className='w-100' src='/images/prototype.svg' alt='idea' />
              </div>
              <h5 className='process__header my-4'>Prototype</h5>
              <p className='lead'>
                we will create an early version of the product to give a simple
                glimpse of its look and feel.
              </p>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='workflow__sub-section-avatar'>
                <img className='w-100' src='/images/accept.svg' alt='idea' />
              </div>
              <h5 className='process__header my-4'>Validate</h5>
              <p className='lead'>
                Before moving into the development phase, we’ll ask a variety of
                users to test out the prototype, and collect their feedback on
                the process
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='technologies'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-12'>
              <h3 className='text-center'>What we offer</h3>
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
                      <div>
                        <img
                          className='w-100'
                          src='/images/designs.jpg'
                          alt='Designs'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-md-8'>
                      <p className='lead'>
                        From strategy to implementation, we collaborate with you
                        to design experiences that build successful products and
                        businesses. We pay close attention to flows and not
                        individual screens because we know that is what builds a
                        great user experience. Each of our team members has a
                        design mindset; all keeping your users top of mind.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId='2'>
                  <div className='row py-5'>
                    <div className='col-12 col-md-4'>
                      <div>
                        <img
                          className='w-100'
                          src='/images/frontend.jpg'
                          alt='Frontend'
                        />
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

      <section className='clients py-5'>
        <OurClients />
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
            /* background: #fff; */
            border: 1px solid $grey;
            border-radius: 50%;
            height: 60px;
            width: 60px;
          }

          .process__header {
            color: $pink !important;
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

          .clients {
            background-color: var(--light-blue);
          }
        `}
      </style>
    </motion.main>
  );
};

export default Service;
