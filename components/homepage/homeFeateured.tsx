import { useEffect, useState } from 'react';
import Link from 'next/link';
// Scroll Behavioour
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { Container, Flex } from "../../styles/globalStyles"
import { 
    HomeFeaturedSection, 
    FeaturedContent,
    FeaturedVideo, 
    FeaturedProjects, 
    } from "../../styles/homeStyles"
import { Arrow } from '../assets/social-icons';


function HomeFeatured ({ onCursor }) {

    const [hovered, setHovered] = useState(false)

    const animation = useAnimation();
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px',
    })


    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
    }, [animation, inView])


    return (
        <HomeFeaturedSection
            ref={featuredRef}
            animate={animation}
            initial='hidden'
            variants={{
                visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: [ .6, .05, -.01, .9 ]
                    }
                },
               hidden: {
                  opacity: 0,
                  y: 72,
               }
            }}
        >   
            <Container>
                <Link href='#'>
                    <a>
                        <FeaturedContent 
                        onMouseEnter={() => onCursor('hovered') } 
                        onMouseLeave={onCursor}
                        onHoverStart={() => setHovered(!hovered)}
                        onHoverEnd={() => setHovered(!hovered)}
                        >
                              <Flex spaceBetween>
                                  <h3>Featured Projects</h3>
                                  <motion.div  
                                animate={{ opacity: hovered ? 1 : 0 }}
                                transition={{ duration: .6, ease: [ .6, .05, -.01, .9] }}
                                   className='meta'>
                                     <h4>PEI Seafood</h4>
                                     <h4>2019</h4> 
                                  </motion.div>
                              </Flex>
                              <h2 className="featured-title">
                                  NOT <br/> HUMBLE
                                  <span className="arrow">
                                      <Arrow hovered={hovered} />
                                  </span>
                              </h2>
                        </FeaturedContent>
                        <FeaturedVideo>
                             <video 
                              loop
                              autoPlay
                              muted
                              src='assets/video/featured-video.mp4'
                             />
                        </FeaturedVideo>
                    </a>
                </Link>
            </Container>
            <Container>
                <FeaturedProjects>
                        <Flex flexEnd>
                            <button>
                                <span>All Projects</span>
                            </button>
                        </Flex>
                </FeaturedProjects>
            </Container>
        </HomeFeaturedSection>
    )
};

export default HomeFeatured;
