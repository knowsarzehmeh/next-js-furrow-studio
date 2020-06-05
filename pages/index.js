import Head from 'next/head';
import { Button } from "reactstrap";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <button className="btn btn-primary">Hello</button>

      <p className="lead">Home Page</p>


      <style jsx>{`
       
      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  )
}


