import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <img src='' alt='logo' />

            <div className='item-right'>
              <div id='wrapper'>
                <header id='header'>
                  <div className='inner'>
                    <nav>
                      <ul>
                        <li>
                          <a href='#menu'>Menu</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </header>

                <nav id='menu'>
                  <ul>
                    <li>
                      <a href='index.html' className='font-menu'>
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href='about.html' className='font-menu'>
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a href='services.html' className='font-menu'>
                        SERVICES
                      </a>
                    </li>
                    <li>
                      <a href='#' className='font-menu'>
                        PARTNERS
                      </a>
                    </li>
                    <li>
                      <a href='contact.html' className='font-menu'>
                        GET IN TOUCH
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className='item-right'>
              <p>USA</p>
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
