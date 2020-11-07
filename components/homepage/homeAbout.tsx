import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Container, Flex } from "../../styles/globalStyles";
import { HomeAboutSection, 
    About, 
    Services, 
    AccordionHeader, 
    AccordionIcon, 
    AccordionContent } from '../../styles/homeStyles';

// Context
import {useGlobalStateContext} from '../../context/globalContext';

const accordionIds  = [
    {
        id: 0,
        title: 'Pre-Production',
        results: [
            'Creative Development',
            'Writing',
            'Storyboards',
            'Art Direction',
            'Location Scouting',
            'Casting'
        ]
    },
    {
        id: 1,
        title: 'Video Production',
        results: [
            'Principle Photography',
            'Production Management',
            'Crew',
            'Dailies',
            'LTD-Archiving',
        ]
    },
    {
        id: 2,
        title: 'Post-Production',
        results: [
            'Colour Correction',
            'Offling Editing',
            'Vfx',
            'Animation and motion graphics',
            'Closed captioning and subtitles',
            'Descriptive video',
            'Dailies',
            'Quality control',
            'LTD Archiving',
        ]
    },
    {
        id: 3,
        title: 'Audio Post-Production',
        results: [
            'We work with som amazing partners and providers',
            'Sound Design',
            'SFX',
            'Music',
            'Sound Mix',
        ]
    },
]


function HomeAbout({ onCursor }) {

    const animation = useAnimation();
    const [aboutRef, inView]  = useInView({
        triggerOnce: true,
        rootMargin: "-300px"
    });

    useEffect(() => {
        
        if(inView) {
            animation.start('visible');
        }
    }, [inView, animation])

    const [expanded, setExpanded] = useState(0)  
    
    return (
        <HomeAboutSection
        ref={aboutRef}
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
                <Flex alignTop>
                    <About>
                        <h2>
                          Furrow is an integrated, full-service creative studio offering
                          video production, creative development, and post-production 
                          services.  
                        </h2>
                        <p>Everybody's got a story. And we don't stop until we've uncovered
                            what makes yours worth telling. Whether it's working directly with
                            you, an agency partner, or putting the finishing touches on 
                            something special, we're ready to dig in and get our hands 
                            dirty-are you?
                        </p>
                    </About>
                    <Services>
                        <h3>Services</h3>
                        { accordionIds.map((details, index) =>(
                            <Accordion 
                            key={index} 
                            details={details} 
                            expanded={expanded}
                            setExpanded={setExpanded}  
                            onCursor={onCursor}
                            />
                        ) ) 
                        }
                    </Services>
                </Flex>
            </Container>
        </HomeAboutSection>
    )
}


const Accordion = ({details, expanded, setExpanded, onCursor}) => {
    const isOpen = details.id === expanded;
    const [hovered, setHovered] = useState(false);

    const { currentTheme } = useGlobalStateContext();
    
    return (
        <>
            <AccordionHeader
             onClick = {() => setExpanded(isOpen ? false : details.id)}
             onMouseEnter = {() => onCursor('hovered') }
             onMouseLeave = {onCursor}
             onHoverStart = {() => setHovered(!hovered)}
             onHoverEnd = {() => setHovered(!hovered)}
             whileHover = {{
                 color:  currentTheme === 'dark' ? '#ffffff' : '#000000'  
             }}
            >
                <AccordionIcon>
                    <motion.span 
                    animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
                    transition={{
                        duration: .2,
                        ease: [ .6, .05, -.01, .9 ]
                    }}
                    ></motion.span>
                    <motion.span 
                    animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
                    transition={{
                        duration: .2,
                        ease: [ .6, .05, -.01, .9 ]
                    }}
                    ></motion.span>
                </AccordionIcon>
                {details.title}
            </AccordionHeader>

            <AccordionContent
                key='content'
                animate={{ height: isOpen ? '100%' : 0}}
                transition={{
                    duration: .6,
                    ease: [ .6, .05, -.01, .9 ]
                }}
            >
                {
                    details.results.map((result, index) =>(
                        <span key={index}>{result}</span>
                    ))
                }
            </AccordionContent>
        </>
    )
}

export default HomeAbout
