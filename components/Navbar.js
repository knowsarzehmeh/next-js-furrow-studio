import Link from "next/link";
import { Button } from "reactstrap";

export default function Navbar() {
    return (
        <div className="container">
            <div>
                <Link href="/">
                    <div>
                        <Button>Home</Button>
                    </div>
                </Link>
                <Link href="/about-us">
                    <div>
                        <Button>Go to ABout us page</Button>
                    </div>
                </Link>
            </div>


            <style jsx>{`
       
      `}</style>

            <style jsx global>{`
       
      `}</style>
        </div>
    )
}
