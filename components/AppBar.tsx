import Link from "next/link";
import '../public/scss/appBar.scss'
export default function Footer(props) {
    const { showBox } = props;
    return (
        <div className="container-fluid header-container mb-5 box-shadow-shade">

            <div className="row">
                <div className="col-12 header">
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="#">
                            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                        </a>
                    </nav>
                </div>
            </div>

            <style jsx>{`
            
       .box-shadow-shade {
        box-shadow: ${showBox ? '0 0 1.8rem rgba(0, 0, 0, 0.15) !important' : '0 0 1.8rem transparent !important'}  ;
        // background: green;
    
       }
    `}</style>

            <style jsx global>{`
       
      `}</style>
        </div>
    )
}
