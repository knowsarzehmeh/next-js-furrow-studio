import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Default = (props) => {
  let [index, setIndex] = useState(0);
  const [testimonies, SetTeminonies] = useState([
    {
      name: "Ajala Bayo",
      pic : "../images/adebayo_ajala.jpeg",
      role: "Manager Interratku",
      words:
        "Exemblar Technologies staffs are great to work with, they listen to your ideas and make something more from it. The project was a total Success",
    },
    {
      name: "Adesanya Mark",
      pic : "../images/Adesanya.jpeg",
      role: "Software Engineer",
      words:
        "Collaborating with Exemblar on the appetite E-Commerce project was a smooth experience, The team always available to address issue.",
    },
    {
      name: "Tobi Adebule",
      pic : "../images/tobi_adebule.jpeg",
      role: "Founder Tamoimages",
      words:
        "Exemblar Technologies analysis of problems , and provision of useable logic and solutions contributed to the success of tamoimages.com",
    },
  
  ]);

  useEffect(() => {
    let timerFunc = setInterval(() => {

      setIndex(()=> ( index++ % testimonies.length) );
      // }
    }, 5000);
    // return clearInterval(timerFunc);
  }, []);

  const check = () => {
   if(index == 2 ) {
     setIndex(0)
   }else return
    
  };

  return (
    <div className="container b-color">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-around flex-row">
            <button
              onClick={(): void => {
                if(index == 0) return;
                setIndex(index--)
              }}
              className="prev-button-box my-auto d-none d-lg-inline-block mr-3"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-left "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
                      {testimonies && testimonies.map((testimony, idx) => (
                ( index == idx) && ( 
                        <motion.div 
                        key={idx} className={`testimonial-box p-5`}
                        initial={{opacity:0 , boxShadow:'transparent' }}
                        animate={{display:'block', opacity:1, boxShadow: '0px 20px 40px 0px rgba(12, 0, 46, 0.06)'}}
                        >
                        <div className="text-center my-auto m-lg-3 p-lg-1">
                          <div>
                            <img className="author-img" src={testimony.pic}/>
                          </div>
                        </div>

                          <div className="m-0 m-lg-5 d-flex flex-column text-center">
                            <h4 className="m-0 mb-lg-2">
                              {testimony.name}
                            </h4>
                            <h6 className="color-feignt lead">
                              {testimony.role}
                            </h6>

                            <p className="color-feignt lead">
                              {testimony.words}
                            </p>
                          </div>
                      </motion.div>
                      )))}
          
          </div>
        </div>
        <button
          onClick={(): void => { 
            if(index == (testimonies.length -1)) return;
            setIndex(index++)
                
          } }
          className="next-button-box my-auto d-none d-lg-inline-block"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .color-feignt {
          color: #959cb1;
        }
        .author-img {
          max-width: 150px;
          height: 150px;
          width: 150px;
          display: inline-block;
          border-radius: 50%;
        }

        .testimonial-box {
          max-width: 770px;
          border-radius: 6px;
          margin: 0 auto;
          background-color: white;
          -webkit-box-shadow: 0px 20px 40px 0px rgba(12, 0, 46, 0.06);
          box-shadow: 0px 20px 40px 0px rgba(12, 0, 46, 0.06);
          padding: 30px;
        }

        .prev-button-box {
          min-width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          border: 1px solid #f3f5f8;
          background-color: white;
          -webkit-box-shadow: 0px 20px 30px 0px rgba(12, 0, 46, 0.06);
          box-shadow: 0px 25px 35px 0px rgba(12, 0, 46, 0.06);
          // position: absolute;
          //top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          cursor: pointer;
          outline: none !important;
        }

        .next-button-box {
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          border: 1px solid #f3f5f8;
          background-color: white;
          -webkit-box-shadow: 0px 20px 30px 0px rgba(12, 0, 46, 0.06);
          box-shadow: 0px 20px 30px 0px rgba(12, 0, 46, 0.06);
          // position: absolute;
          //top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          cursor: pointer;
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

export default Default;
