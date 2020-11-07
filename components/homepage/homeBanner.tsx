import { useEffect, useRef } from 'react'

import {
     Banner, 
     Video, 
     Canvas, 
     BannerTitle, 
     Headline 
    } from  '../../styles/homeStyles';

import useWindowSize from '../../hooks/useWindowSize';

// context 
import { useGlobalStateContext} from '../../context/globalContext';

function HomeBanner({ onCursor }) {

    let canvas = useRef(null);
    let size = process.browser && useWindowSize(); //Window Size
    const { currentTheme } = useGlobalStateContext();

    useEffect(() => {
       let renderingElement = canvas.current;
       let drawingElement =  renderingElement.cloneNode();

       let renderingCtx = renderingElement.getContext('2d');
       let drawingCtx = drawingElement.getContext('2d');
     
       let lastX = 0, lastY = 0, cursorMoving = false;

       renderingCtx.globalCompositeOperation = 'source-over';
       renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
       renderingCtx.fillRect(0, 0, size.width, size.height);


       renderingElement.addEventListener('mouseover', event => {
            cursorMoving = true;
            lastX = event.pageX - renderingElement.offsetLeft;
            lastY = event.pageY - renderingElement.offsetTop;
       });

       renderingElement.addEventListener('mouseup', event => {
            cursorMoving = false;
            lastX = event.pageX - renderingElement.offsetLeft;
            lastY = event.pageY - renderingElement.offsetTop;
       });
     
       renderingElement.addEventListener('mousemove', event => {
            
        if(cursorMoving) {
            drawingCtx.globalCompositeOperation = 'source-over';
            renderingCtx.globalCompositeOperation = 'destination-out';

            let currentX = event.pageX - renderingElement.offsetLeft; //Similar to clientX 
            let currentY = event.pageY - renderingElement.offsetTop;   //Similar to clientY
            drawingCtx.lineJoin = 'round';

            
            // drawingCtx.beginPath();
            drawingCtx.moveTo(lastX, lastY);
            drawingCtx.lineTo(currentX, currentY);
            drawingCtx.closePath();
            drawingCtx.lineWidth = 120;
            drawingCtx.stroke();
            lastX = currentX;
            lastY = currentY;
            renderingCtx.drawImage(drawingElement, 0, 0);
        }

       });
    }, [currentTheme]);



    const bannerTitleVariant =  {
        initial: { y: 800 },
        animate: {
             y: 0, 
             transition: {
                staggerChildren: .2,
             },
             }
    };

    const childVariant =  {
        initial: { y: 800 },
        animate: {
             y: 0, 
             transition: {
                duration: 1,
                ease: [.6, .05, -.01, .09]
             },
             }
    };




    return (
        <Banner>
           <Video>
               <video 
               height='100%' 
               width='100%' 
               loop 
               autoPlay 
               muted
               src='assets/video/video.mp4'
                />
           </Video>  
          { process.browser
           && 
           <Canvas width={size.width} height={size.height} ref={canvas}  onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} /> }
           <BannerTitle variants={bannerTitleVariant} initial='initial' animate='animate' >
               <Headline variants={childVariant} >DIG</Headline>
               <Headline variants={childVariant}>DEEP</Headline>
           </BannerTitle>
        </Banner>
    )
}

export default HomeBanner
