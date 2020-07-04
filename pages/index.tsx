import Head from "next/head";
import { NextSeo } from "next-seo";
import { Button } from "reactstrap";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "https://www.exemblar.com.ng/",

          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />

      {/**start*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="hrd-1">
              We <span className="primary-color">design</span>{" "}
              <span className="other">&</span>{" "}
              <span className="primary-color">build</span> digital <br></br>{" "}
              experiences{" "}
            </h3>

            <img src="images/arrow.svg" className="img-fluid arrow" />
            <p className="p-1">
              We design, build and launch websites and products that <br></br>{" "}
              are simple, beautiful and helps businesses grow.
            </p>

            <button className="ex-btn">
              Discover Our Process <img src="" />
            </button>

            <img src="images/imgcenter.png" className="img-fluid imgcenter" />
          </div>
        </div>
      </div>
      {/**end */}

      {/**second section */}

      <div className="bac-back">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="com">
                Communicate your designs like never before
              </h3>
              <p className="com-1">
                We build great products that help<br></br> businesses grow
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-wat"> </div>
            </div>
            <div className="col-lg-4">
            <div className="card-wat"></div>
            </div>
            <div className="col-lg-4">
            <div className="card-wat"></div>
            </div>
          </div>



          <div className="row">
            <div className="col-lg-4">
              <div className="card-wat"> </div>
            </div>
            <div className="col-lg-4">
            <div className="card-wat"></div>
            </div>
            <div className="col-lg-4">
            <div className="card-wat"></div>
            </div>
          </div>

        </div>

        
        
      </div>

      

      {/*end*/}

     

      <style jsx>{`
       
        
        .hrd-1 {
          text-align: center;
          font-size: 50px;
          line-height: 60px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #303090;
          margin-top:50px;
        }

        .hrd-2 {
          text-align: center;
        }

        .p-1,
        .p-2 {
          text-align: center;
          color: black;
          font-weight: 700;
          font-size: 18px;
          line-height: 32px;
          margin-bottom: 35px;
          margin-top: -130px;
        }

        .ex-btn{
          display: block;
          margin-left: auto;
          margin-right: auto;
          color: white;
          background-color: #303090;
          border: transparent;
          font-weight:bold;
          font-size:14px;
          height: 60px;
          width: 220px;
          border-radius:35px;
        }

        .ex-btn:hover {
          display: block;
          margin-left: auto;
          margin-right: auto;
          color: black;
          background-color: #f3356c;
          font-weight:bold;
          font-size:14px;
          height: 60px;
          width: 220px;
        }

        .bac-back {
          background-color:#303090;
          width: 100%;
          min-height: 55vh;
        }

        .arrow {
          width: 51px;
          margin-left: 240px;
          margin-bottom: 50px;
        }

        .imgcenter {
          width: 1000px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .com {
          margin-top: 100px;
          color:white;
        }
        .com-1 {
          margin-top: 30px;
          line-height: 25px;
          color:white;
        }

        .card-wat{
          width:85%;
          min-height:41vh;
          background-color:white;
          margin-top:50px;
          margin-bottom:50px;
          border: transparent;
          border-radius:5px;
          display:block;
          margin-left:auto;
          margin-right:auto;
          
}


      `}</style>

      {/*
      <style jsx global>{`
      
      `}</style>
*/}
    </div>
  );
}
