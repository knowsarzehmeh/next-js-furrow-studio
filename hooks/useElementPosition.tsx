import { useState, useEffect } from 'react';


export default function useElementPosition(el) {

    function getElement(x, y) {
        return { x, y }
    }

    const [elementPosition, setElementPosition] = useState(getElement);

    useEffect(() => {
       function handlePosition() {
           let element = el.current;
           let x = element.getBoundingClientRect().left 
                   + document.documentElement.scrollLeft 
                   + Math.round(element.getBoundingClientRect().width) / 2;
                   //window.scrollX - document.documentElement.scrollLeft and element.offsetWidth - Math.round(element.getBoundingClientRect().width)
           let y = element.getBoundingClientRect().top 
                   + document.documentElement.scrollTop
                   + Math.round(element.getBoundingClientRect().height) / 2;
                   //window.scrollY - document.documentElement.scrollTop and element.offsetHeight - Math.round(element.getBoundingClientRect().height)
       
                setElementPosition(getElement(x, y));
        }

        handlePosition();
        
    }, [el])

    

    return elementPosition;
}