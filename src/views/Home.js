import React from "react";
import EasyToWin from "../components/Home/EasyToWin";
import Features from "../components/Home/Features";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Reached from "../components/Home/Reached";
import Story from "../components/Home/Story";
import Navbar from "../layout/Navbar";

function Home(props) {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section className="header pt-lg-60 pb-50">
        <Hero />
      </section>

      <section id="feature" className="feature pt-50 pb-50">
        <EasyToWin />
      </section>

      <section className="featured-game pt-50 pb-50">
        <Features />
      </section>

      <section className="reached pt-50 pb-50">
        <Reached />
      </section>

      <section className="story pt-50 pb-50">
        <Story />
      </section>

      <section className="footer pt-50">
        <Footer />
      </section>
    </>
  );
}

export default Home;
