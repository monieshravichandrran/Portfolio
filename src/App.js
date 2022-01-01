import "./App.css";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Font from "react-font";
import photo from "./images/photo.jpg";
import Slide from "react-reveal/Slide";
import React from "react";
import reactjs from "./images/reactjs.gif"
const App = () => {
  return (
    <>
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
        <Bounce duration={2000}>
          <img src={photo} className="photo" />
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
                Hi this is Moniesh Ravichandran. Welcome to my page!!!
                I was born and brought up at Chennai. I completed my
                schooling at DAV Senior Secondary School. I am a high acheiving
                Computer Science Undergrad at Sri Sivasubramaniya Nadar College
                of Engineering keen on exploring the domains of Web Development,
                App Development and Blockchain Development looking forward for
                IT related internships. I am competitve by nature and a quick
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
                  Schooling &nbsp; : &nbsp; DAV Senior Secondary School
                  Moggepair. Chennai Completed Grade 10 With a 10 CGPA and 12th
                  with a 94%. Was a member of School Razmataz Culturals
                  Organization
                  <br /><br/>
                  Undergraduation (July 2019 - May 2023) &nbsp; : &nbsp; Sri
                  Siva Subramaniam College of Engineering Kalavakkam, Chennai.
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
              <p className="text-white para">
                <img src={reactjs} className="skills"/>
              </p>
            </Font>
          </Slide>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default App;
