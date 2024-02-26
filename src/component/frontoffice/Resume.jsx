import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    const tablinks = document.querySelectorAll(".resume-link .box");
    const tablinkArray = Array.from(tablinks);
    const tabDivs = document.querySelectorAll(".container > .resume-cards");
    const tabArray = Array.from(tabDivs);

    tablinkArray.forEach((ele) => {
      ele.addEventListener("click", function (e) {
        tablinkArray.forEach((ele) => {
          ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        tabArray.forEach((div) => {
          div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display =
          "grid";
      });
    });

    // Clean up event listeners when component unmounts
    return () => {
      tablinkArray.forEach((ele) => {
        ele.removeEventListener("click", () => {});
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <section className="resume">
      <div className="container">
        <div className="heading">
          <h3>
            My <span>Resume</span>
          </h3>
          <h1>Some basic information about myself</h1>
        </div>
        <div className="resume-link">
        
          <div className="box" data-cont=".one">
            <i className="fa-solid fa-user-tie"></i>
            <h3>Experience</h3>
          </div>
          <div className="box" data-cont=".three">
            <i className="fa-solid fa-user-graduate"></i>
            <h3>Education</h3>
          </div>
          <div className="box" data-cont=".four">
            <i className="fa-solid fa-users"></i>
            <h3>Reference</h3>
          </div>
        </div>
      
        <div className="resume-cards ca one">
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-award"></i>
              <div className="text">
                <h4>Frontend Developer</h4>
                <h5>Creative-It Institute</h5>
              </div>
            </div>
            <div className="date">
              <h6>Feb 2016 - Dec 2017</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-award"></i>
              <div className="text">
                <h4>Frontend Developer</h4>
                <h5>Ingenious-Hub Team</h5>
              </div>
            </div>
            <div className="date">
              <h6>Feb 2017 - Dec 2018</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-award"></i>
              <div className="text">
                <h4>Frontend Developer</h4>
                <h5>Icon-Infotech Limited</h5>
              </div>
            </div>
            <div className="date">
              <h6>Feb 2017 - Dec 2018</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-award"></i>
              <div className="text">
                <h4>Frontend Developer</h4>
                <h5>Xpeedstudio</h5>
              </div>
            </div>
            <div className="date">
              <h6>Feb 2019 - Dec 2020</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
        </div>
        <div className="resume-cards ca three">
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-graduation-cap"></i>
              <div className="text">
                <h4>B.S.S Honours at Economics</h4>
                <h5>Government Tolaram College</h5>
              </div>
            </div>
            <div className="date">
              <h6>Apr 2017 - Running</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-graduation-cap"></i>
              <div className="text">
                <h4>Alim / H.S.C at Humanities</h4>
                <h5>Government Madrasha-E Alia</h5>
              </div>
            </div>
            <div className="date">
              <h6>Jan 2015 - Feb 2017</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-graduation-cap"></i>
              <div className="text">
                <h4>Dakhil / S.S.C at Humanities</h4>
                <h5>Islami Mission Kamil Madrasha</h5>
              </div>
            </div>
            <div className="date">
              <h6>Jan 2013 - Dec 2015</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <i className="fa-solid fa-graduation-cap"></i>
              <div className="text">
                <h4>J.D.C / J.S.C</h4>
                <h5>Badarpur Senior Alim Madrasha</h5>
              </div>
            </div>
            <div className="date">
              <h6>Jan 2011 - Dec 2013</h6>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Quibusdam possimus vero explicabo quas numquam harum voluptas
                itaque error et perspiciatis eos fuga.
              </p>
            </div>
          </div>
        </div>
        <div className="resume-cards ls four">
          <div className="card">
            <div className="all">
              <img src="/public/assets_front/image/wadhah.jpg" alt="" />
              <div className="info">
                <h2>Wadhah Naggui</h2>
                <p>WEB DEVELOPPER CHEZ ESPRIT</p>
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="all">
              <img src="./image/asset 6.jpg" alt="" />
              <div className="info">
                <h2>Alexander Jacob</h2>
                <p>
                  Deputy Manager <br />
                  at Icon Infotech LTD
                </p>
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
