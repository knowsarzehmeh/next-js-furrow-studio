import { useState, useEffect } from 'react';
import { Cursor } from '../styles/globalStyles';

// Context
import { useGlobalStateContext } from '../context/globalContext';

function CustomCursor({ toggleMenu }) {

    const {cursorType} = useGlobalStateContext();
    
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400
    });

    const onMouseMove = event => {
        const {pageX: x, pageY: y} = event;
        setMousePosition({ x , y })
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }, [cursorType]);

    return (
        <>
           <Cursor 
           className={`${!!cursorType ? 'hovered' : ''} ${cursorType} 
           ${toggleMenu ? 'nav-open': ''} 
           
           ` 
            }
           style={{ left: mousePosition.x, top: mousePosition.y }} 
            /> 
        </>
    )
}

export default CustomCursor
