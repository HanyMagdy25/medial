import React, { useState } from "react";
import Head from "next/head";

import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

export default function Layout({ title, children, description }) {
  //   const classes = useStyles();
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  return (
    <div>
      <Head>
        <title>New Medical</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <title>{title? `${title}-Next Amazon` : "Next Amazon"}</title> */}
        {/* {description && <meta name="description" content={description}></meta>} */}
      </Head>
      {/* ******* Start Navbar ********* */}
      <Navigation />

      {/* ******** End Navbar ******** */}
      {/* ******** Start Children ******** */}
      <div className="children-div">{children}</div>
      {/* ******** Start Footer ******** */}
      <Footer />
    </div>
  );
}
