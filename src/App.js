import "./App.css";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Font from "react-font";
import photo from "./images/photo.jpg";
import Slide from "react-reveal/Slide";
import React from "react";
import reactjs from "./images/reactjs.gif";
import reactnative from "./images/reactnative.gif";
import nodejs from "./images/nodejs.gif";
import htmlcssjs from "./images/html-css-js.gif";
import sql from "./images/sql.gif";
import mongoDB from "./images/mongoDB.gif";
import python from "./images/python.gif";
import blockchain from "./images/blockchain.gif";
import Cplus from "./images/cplus.gif";
import java from "./images/java.gif";
import Roll from "react-reveal/Roll";
import github from "./images/github.png";
import insta from "./images/insta.jpg";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import codechef from "./images/codechef.png";
import codeforces from "./images/codeforces.jpg";
import ParticleAnimation from "react-particle-animation";
const App = () => {
  return (
    <>
      <ParticleAnimation
        numParticles={500}
        style={{
          position: "absolute",
          width: "100%",
          height: "600%",
        }}
        background={{
          r: 0,
          g: 0,
          b: 0,
          a: 0.1
        }}
        color={{
          r: 255,
          g: 55,
          b: 55,
          a: 100
        }}
        lineWidth={0}
        particleSpeed={1}
        particleRadius={1}
        interactive={false}
      />
      <div className="bgshade">
      <div className="flex justify-center mt-10">
        <Zoom duration={2000} top>
          <Font family="Monoton" italic={false}>
            <h1 className="text-white name">
              MONIESH &nbsp; &nbsp; RAVICHANDRAN
            </h1>
          </Font>
        </Zoom>
      </div>
      <div className="flex justify-center mt-10">
        <Bounce duration={2000} delay={2000}>
          <img src={photo} alt="photos" className="photo" />
        </Bounce>
      </div>
      <div className="menu">
        <div>
          <Slide left duration={2000}>
            <Font family="Kufam" italic={true}>
              <h1 className="text-green-500 about">About Me</h1>
            </Font>
            <Font family="Roboto">
              <p className="text-white para">
                Hi this is Moniesh Ravichandran. Welcome to my page!!! I was
                born and brought up at Chennai. I completed my schooling at DAV
                Senior Secondary School. I am a high acheiving Computer Science
                Undergrad at Sri Sivasubramaniya Nadar College of Engineering
                keen on exploring the domains of Web Development, App
                Development and Blockchain Development looking forward for IT
                related internships. I am competitve by nature and a quick
                learner. Follower of CryptoCurrencies, cricket, National &
                International Affairs
              </p>
            </Font>
          </Slide>
        </div>
      </div>
      <div className="menu">
        <div>
          <Slide left duration={2000}>
            <Font family="Kufam" italic={true}>
              <h1 className="text-green-500 about">Education</h1>
            </Font>
            <Font family="Roboto">
              <p className="text-white para">
                Schooling &nbsp; : &nbsp; DAV Senior Secondary School Moggepair.
                Chennai Completed Grade 10 With a 10 CGPA and 12th with a 94%.
                Was a member of School Razmataz Culturals Organization
                <br />
                <br />
                Undergraduation (July 2019 - May 2023) &nbsp; : &nbsp; Sri Siva
                Subramaniam College of Engineering Kalavakkam, Chennai.
                Currently persuing 3rd year with a GPA of 8.75. Member of SSN
                Coding Club and National Sports Organization (NSO){" "}
              </p>
            </Font>
          </Slide>
        </div>
      </div>
      <div className="menu">
        <div>
          <Slide left duration={2000}>
            <Font family="Kufam" italic={true}>
              <h1 className="text-green-500 about">Work Experience</h1>
            </Font>
            <Font family="Roboto">
              <ul>
                <li className="text-white para">
                  Code Unity (Nov 2021 - Present) &nbsp; : &nbsp; Front End
                  React Native Developer at Code Unity. Worked in building an
                  App for State Crime Records Bureau (SCRB) for the TN State
                  Field Policing. The App improves the communication within the
                  police department where the higher officials keep track of the
                  duties, tasks and functionalities of lower officials. Worked
                  in building UI and OCR kit for image processing and text
                  detection.
                </li>
              </ul>
            </Font>
          </Slide>
        </div>
      </div>
      <div className="menu">
        <div>
          <Slide left duration={2000}>
            <Font family="Kufam" italic={true}>
              <h1 className="text-green-500 about">Skills</h1>
            </Font>
            <Font family="Roboto">
              <h1 className="text-white para mt-7">
                Domains: Web, App & Blockchain Development
              </h1>
            </Font>
          </Slide>
          <Font family="Roboto">
            <div className="cont2">
              <Roll duration={2000}>
                <div className="each1 each">
                  <h1 className="text-white  para mt-10">React JS</h1>
                  <img src={reactjs} alt="React" className="skills mt-5" />
                </div>
              </Roll>
              <Roll duration={2000}>
                <div>
                  <h1 className="text-white mt-10 para">React Native</h1>
                  <img
                    src={reactnative}
                    alt="React Native"
                    className="skills mt-5"
                  />
                </div>
              </Roll>
            </div>
            <div className="cont2">
              <Roll duration={2000}>
                <div className="each1 each">
                  <p className="text-white mt-10">Node JS</p>
                  <p className="text-white para mt-5">
                    <img src={nodejs} alt="NodeJS" className="skills mt-5" />
                  </p>
                </div>
              </Roll>
              <Roll duration={2000}>
                <div className="each">
                  <p className="text-white mt-10">HTML CSS JS</p>
                  <p className="text-white para mt-5">
                    <img
                      src={htmlcssjs}
                      alt="HTML CSS JS"
                      className="skills mt-5"
                    />
                  </p>
                </div>
              </Roll>
            </div>
            <div className="cont2">
              <Roll duration={2000}>
                <div className="each1 each">
                  <p className="text-white mt-10">SQL</p>
                  <p className="text-white para mt-5">
                    <img src={sql} alt="SQL" className="skills mt-5" />
                  </p>
                </div>
              </Roll>
              <Roll duration={2000}>
                <div className="each">
                  <p className="text-white mt-10">NoSQL</p>
                  <p className="text-white para mt-5">
                    <img src={mongoDB} alt="NoSQL" className="skills mt-5" />
                  </p>
                </div>
              </Roll>
            </div>
            <div className="cont2">
              <Roll duration={2000}>
                <div className="each each1">
                  <p className="text-white mt-10">Phyton</p>
                  <p className="text-white para mt-5">
                    <img src={python} alt="python" className="skills mt-5" />
                  </p>
                </div>
              </Roll>
              <Roll duration={2000}>
                <div className="each">
                  <p className="text-white mt-10">Blockchain</p>
                  <p className="text-white para mt-5">
                    <img
                      src={blockchain}
                      alt="blockchain"
                      className="skills mt-5"
                    />
                  </p>
                </div>
              </Roll>
            </div>
            <div className="cont2">
              <Roll duration={2000}>
                <div className="each1 each">
                  <p className="text-white mt-10">C++</p>
                  <p className="text-white para mt-5">
                    <img src={Cplus} alt="C++" className="skills mt-5" />
                  </p>
                </div>
              </Roll>
              <Roll duration={2000}>
                <div className="each">
                  <p className="text-white mt-10">Java</p>
                  <p className="text-white para mt-5">
                    <img src={java} alt="Java" className="skills mt-5" />
                  </p>
                </div>
              </Roll>
            </div>
          </Font>
        </div>
      </div>
      <div className="menu">
        <div>
          <Slide left duration={2000}>
            <Font family="Kufam" italic={true}>
              <h1 className="text-green-500 about">Contact Me</h1>
              <div>
                <ul className="flex justify-center justify-between max-w-3xl">
                  <li className="float-left">
                    <a
                      href="https://github.com/monieshravichandrran"
                      target="_blank"
                    >
                      <img className="social" src={github} alt="github" />
                    </a>
                  </li>
                  <li className="float-left">
                    <a
                      href="https://www.linkedin.com/in/moniesh"
                      target="_blank"
                    >
                      <img className="social" src={linkedin} alt="linkedin" />
                    </a>
                  </li>
                  <li className="float-left">
                    <a
                      href="https://www.codechef.com/users/abrahambenjami"
                      target="_blank"
                    >
                      <img className="social" src={codechef} alt="coddechef" />
                    </a>
                  </li>
                  <li className="float-left" target="_blank">
                    <a
                      href="https://codeforces.com/profile/bianmaqui"
                      target="_blank"
                    >
                      <img
                        className="social"
                        src={codeforces}
                        alt="codeforces"
                      />
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://instagram.com/iammoniesh208" target="_blank">
                      <img className="social" src={insta} alt="insta" />
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://twitter.com/monieshravi" target="_blank">
                      <img src={twitter} alt="twitter" className="social" />
                    </a>
                  </li>
                </ul>
              </div>
            </Font>
            <Font family="Roboto"></Font>
          </Slide>
        </div>
      </div>
      <br />
      <br />
      <br />
      </div>
    </>
  );
};

export default App;
