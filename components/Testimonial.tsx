import React, { useState, useEffect } from "react";

const Default = (props) => {
  let [index, setIndex] = useState(0);
  const [testimonies, SetTeminonies] = useState([
    {
      name: "Agba mdm",
      role: "Milo",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum tempora non dignissimos nihil dolores quia Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum tempora non dignissimos nihil dolores quia",
    },
    {
      name: "Osajumiie",
      role: "CEO APPettite",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum tempora non dignissimos nihil dolores quia Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum tempora non dignissimos nihil dolores quia",
    },
    {
      name: "Jezzkid",
      role: "Bournvita",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum tempora non dignissimos nihil dolores quia Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum tempora non dignissimos nihil dolores quia",
    },
  ]);

  useEffect(() => {
    let timerFunc = setInterval(() => {
      setIndex(index++);
    }, 10000);
    return clearInterval(timerFunc);
  }, []);

  return (
    <div className="container b-color">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-around flex-row">
            <button
              onClick={(): void => setIndex(index--)}
              className="prev-button-box my-auto d-none d-lg-inline-block"
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

            <div className="testimonial-box">
              <div className="text-center my-auto m-lg-5 p-lg-4">
                <div>
                  <img className="author-img" src="/images/chispare.jpg" />
                </div>
              </div>
              {
                <div className="m-0 m-lg-5 d-flex flex-column text-center">
                  <h4 className="m-0 mb-lg-2">
                    {testimonies[index % testimonies.length].name}
                  </h4>
                  <h6 className="color-feignt lead">
                    {testimonies[index % testimonies.length].role}
                  </h6>

                  <p className="color-feignt lead">
                    {testimonies[index % testimonies.length].words}
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
        <button
          onClick={(): void => setIndex(index++)}
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
          max-width: 100px;
          width: 100px;
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
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          border: 1px solid #f3f5f8;
          background-color: white;

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
