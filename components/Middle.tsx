import Link from 'next/link';

export default function Middle() {
  return (
    <div>

<div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="t-1 secondary-color">
              You'<span className="primary-color">ll</span> be in <span className="primary-color">good</span> <br></br> company
            </h3>

            <p className="p-12">
              We have been collaborating to build great digital products <br></br>for Companies, Startups & Individuals e.t.c.
            </p>

            <img src="" />
            <img src="" />
            <img src="" />
          </div>
        </div>
      </div>


      
            <style jsx>{`
.t-1{
    text-align:center;
    margin-top:100px;
    margin-bottom:35px;
    line-height:45px;
    font-size:37px;
}

.p-12,
 {
  text-align: center;
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 35px;
  margin-top: 20px;
}


       
      `}</style>

{/*
            <style jsx global>{`
       
      `}</style>

*/}
    </div>
  );
}
