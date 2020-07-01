import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <div className='container'>
        <div className='line'></div>

        <div className='row'>
          <div className='col-lg-3'>
            <p>yeah exemblar</p>
          </div>

          <div className='col-lg-9'>
            <div className='row'>
              <div className='col-lg-3'>
                <h5>Product</h5>
                <ul>
                  <li>Deployment</li>
                </ul>
              </div>

              <div className='col-lg-3'>
                <h5>Company</h5>
                <ul>
                  <li>Work</li>
                  <li>About</li>
                  <li>Services</li>
                </ul>
              </div>

              <div className='col-lg-3'>
                <h5>Legal</h5>
                <ul>
                  <li>Privacy</li>
                  <li>Terms of contract</li>
                </ul>
              </div>
              <div className='col-lg-3'>
                <h5>Connect</h5>
                <ul>
                  <li>Behance</li>
                  <li>instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
            <style jsx>{`
       
      `}</style>

            <style jsx global>{`
       
      `}</style>

*/}
    </div>
  );
}
