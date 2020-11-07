import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { Container, Flex } from '../styles/globalStyles';
import { Nav, NavHeader, CloseNav, NavList, NavFooter, NavVideo  } from '../styles/navigationStyles';
import { Arrow } from './assets/social-icons';


const navRoutes = [
    { id: 0, title: 'not humble', path: 'not-humble', video: 'featured-video.mp4'},
    { id: 1, title: 'bleaping easy', path: 'bleaping-easy', video: 'easy.mp4'},
    { id: 2, title: 'make it zero', path: 'make-it-zero', video: 'make-it-zero.mp4'},
    { id: 3, title: 'it takes an island', path: 'it-takes-an-island', video: 'it-takes-an-island.mp4'},
    { id: 4, title: '50 beaches', path: '50-beaches', video: '50-beaches.mp4'},
]


function Navigation({ onCursor, toggleMenu, setToggleMenu }) {

    const [revealVideo, setRevealVideo] = useState({
        show: false,
        video: 'featured-video.mp4',
        key: 0
    });



    return (
        <>
            <AnimatePresence >
                {
                    toggleMenu && (
         <Nav 
         initial={{x: '-100%'} } 
         exit={{ x: '-100%'}}
         animate={{x: toggleMenu ? 0 : '-100%'}}
         transition={{
             duration: .8,
             ease: [ .6, .05, -.01, .9]
         }}
         >
           <Container>
                <NavHeader>
                    <Flex spaceBetween noHeight>
                        <h2>Projects</h2>

                        <CloseNav 
                        onClick={() => setToggleMenu(!toggleMenu) }
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                        >
                            <button>
                                <span></span>
                                <span></span>
                            </button>
                        </CloseNav>
                    </Flex>
                </NavHeader>
                <NavList>
                    <ul>
                        {
                            navRoutes.map(route => (
                                <motion.li 
                                onHoverStart={() => setRevealVideo({ show: true, video: route.video, key: route.id })} 
                                onHoverEnd={() => setRevealVideo({ show: false, video: 'featured-video.mp4', key: 0 })}
                                key= {route.id}
                                onMouseEnter={() => onCursor('pointer')}
                                onMouseLeave={onCursor}
                                >
                            <Link href={`projects/${route.path}`}>
                             <a>
                                 <motion.div initial={{x: -108}}
                                  whileHover={{ x: -40 }}
                                  transition= {{ duration: 0.4, ease: [ 0.6, 0.05, -0.01, 0.9 ] }}
                                 className='link'>
                                 <span className='arrow'>
                                      <Arrow/> 
                                 </span>
                                 {route.title}
                                </motion.div>
                            </a>
                            </Link>
                        </motion.li>
                            ))
                        }
                    </ul>
                </NavList>
                <NavFooter>
                </NavFooter>
                <NavVideo>
                    <motion.div animate={{ width: revealVideo.show ? 0: '100%' }} className='reveal'>
                        <div className='video'>
                           <AnimatePresence initial={false} exitBeforeEnter>
                           <motion.video  src={`assets/video/${revealVideo.video}`}
                           key={revealVideo.key}
                           initial={{opacity: 0}}
                           exit={{opacity: 0}}
                           animate={{opacity: 1}}
                           transition={{duration: .2, ease: 'easeInOut' }}
                            loop
                            autoPlay
                            muted
                            />
                           </AnimatePresence>
                        </div>
                    </motion.div>
                </NavVideo>
            </Container> 
        </Nav>
              )
      }
            </AnimatePresence>
        </>
    )
}

export default Navigation
