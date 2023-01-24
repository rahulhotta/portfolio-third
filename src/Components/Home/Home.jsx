import React from 'react'

import homeLogo from '../../Images/homeLogo.png'

import Button from '../UI/Button/Button';

import { Link } from 'react-router-dom';

import Resume from '../../Images/Rahul New Resume.pdf'

import { IoMdDownload } from "react-icons/io";
import './Home.css';
function Home() {
  return (
    <div className="container home__container">
      <img src={homeLogo} alt="logo" className="home__img" />
      <div className="home__text-container">
        <span className="home__line1">Hi, I am</span>
        <h1 className="home__line2">RAHUL HOTTA</h1>
        <div className="home__line3">A Web Developer</div>
        <a href={Resume} download="rahul resume">
          <button className="home__download-btn">
            Download Resume <IoMdDownload />
          </button>
        </a>
        <Link to={"about"}>
          <Button>More About Me</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home