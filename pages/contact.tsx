import Head from "next/head";

export default function Custom404() {
  return (
    <section className="container mt-5 mt-lg-2 pt-5  pt-lg-0">
      <Head>
        <title>exemblar contact us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center flex-column text-black">
            <h1 className="mx-auto">
              <span className="secondary-color">You're</span>
              <span className="primary-color"> welcome to get in </span>
              <span className="text-black d-none d-lg-inline">{"touch &"}</span>
            </h1>
            <h1 className="text-black mx-auto d-lg-none">{"touch &"}</h1>
            <h1 className="mx-auto">
              <span className="text-black">say </span>{" "}
              <span className="secondary-color">"hello"</span>
            </h1>
            {/* <h2 className="secondary-color mx-auto">
                            <span>experiences </span> </h2> */}
          </div>
        </div>
      </div>
      <div className="row mt-2 mt-lg-3">
        <div className="col-12 lead">
          <div className="mx-auto d-flex justify-content-center flex-column">
            <p className="mx-auto lead">
              Do you have an enquiry to make or questions to ask, please fill
              the form below{" "}
            </p>
            <p className="mx-lg-auto lead">And we will get right back to you</p>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </section>
  );
}
