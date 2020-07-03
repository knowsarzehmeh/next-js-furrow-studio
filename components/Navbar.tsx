import Link from 'next/link';


export default function Navbar() {
  return (
    <div>
      <div className="mrg-head">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <img src='images/exemblar-logo.png' className="img-fluid logo" alt='logo' />

            <div className='item-right'>
              hhh
            </div>

            <div className='item-right'>
              <p>USA</p>
            </div>
          </div>
        </div>
      </div>

</div>
    
            <style jsx>{`

.item-right {
  float: right;
}


.logo{
width: 170px;
float: left; 
}

.mrg-head{
  margin-top:30px
}

       
      `}</style>
{/*
            <style jsx global>{`
       
      `}</style>
*/}
    </div>
  );
}
