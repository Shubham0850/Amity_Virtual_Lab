import React from "react";
import "./style.css";
import banner from "../images/home-banner-2.jpg";
import atom from "../images/bg-atom.gif";
import Nav from "../components/nav";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="home  flex">
        <img src={atom} alt="atom-bg" className="atom-bg" />
        <div className="home-left">
          <h1 className="welcome__text">Welcome To AUP Lab</h1>
          <h3>A Virtual Lab For Amity University Patna.</h3>
          <p>
            Amity Lab stands for Amity Virtual Laboratory. Amity Lab is design
            to perform virtual experiments based on the syllabus. Amitians can
            simply login to the application and perform experiments available in
            the A-lab and able to directly download their experiment in pdf form
            or can submit the application directly to the Professor.
          </p>
          <a href="/course">
            <button className="btn">
              <h3>Go To Lab</h3>
            </button>
          </a>
        </div>
        <div className="home-right">
          <img src={banner} alt="home-banner" className="img" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
