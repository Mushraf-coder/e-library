import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Books from "./Books";
import Footer from "./Footer";

function Library() {
  return (
    <div>
      <Navbar />
      <Home />
      <Books />
      <Footer />
    </div>
  );
}

export default Library;
