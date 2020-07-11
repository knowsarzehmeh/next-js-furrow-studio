import React,{useEffect, useRef, createRef } from 'react';
// import { ReactTypeformEmbed } from 'react-typeform-embed';
import * as typeformEmbed from '@typeform/embed'


const ContactUsForm: React.FunctionComponent= () => {
    const el = useRef(null);


    useEffect(() => {
        effect()
    }, []);

   const effect = () => {
    typeformEmbed.makeWidget(
        el.current,
        'https://exemblar.typeform.com/to/hWxKUEnC',
        {
        // autoOpen:false,
          opacity: 55,
          buttonText: "Answer this!",
          hideScrollbars: true,
          onSubmit: function () {
            console.log('Typeform successfully submitted')
          },
          onReady: function () {
            console.log('Typeform is ready')
          }
        }
      )
      
   }


    return  ( <div ref={el} style={{width: '50vh', height: '300px'}}> </div>)

  
}

export default ContactUsForm