import React from "react";

const Skill = () => {
  return (
    <div>
      <div className="skills grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 p-10 sm:w-4/4 lg:w-3/4 m-auto mt-12 h-[599px]">
        {/* left part of skills part */}
        <div data-aos="fade-up" className="skills-left m5">
          <div className="skills-left-top">
            <h1>
              <span className="p-4 pl-0 text-accent">______</span>
              <span className="bg-[#fef3c7] text-accent text-1xl p-1">
                SKILLS
              </span>
            </h1>
          </div>
          <div className="skills-left-body py-5 ">
            <div>
              <h2 className="text-3xl font-semibold text-[#A3A5A7] py-3">
                As A Designer I Am Good At Fit With Few{" "}
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  className=" text-accent"
                >
                  SKILLS.
                </span>
              </h2>
              <p className="text-[#A3A5A7] leading-relaxed		">
                All desigener have good skills to make sure satisfied their
                clints, As a designer I am also specialised few
                <span className="font-semibold text-[#1D2043]">
                  skills.
                </span>{" "}
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="progress overflow-visible  grid grid-cols-1"
              >
                <div>
                  <label className="label">
                    <span className="label-text">React.js</span>
                    <span className="label-text-alt">85%</span>
                  </label>
                  <progress
                    className="progress progress-accent"
                    value="85"
                    max="100"
                  ></progress>
                </div>
                <div
                //   data-aos="fade-right"
                //   data-aos-offset="300"
                //   data-aos-duration="1500"
                //   data-aos-easing="ease-in-sine"
                >
                  <label className="label">
                    <span className="label-text">node.js</span>
                    <span className="label-text-alt">80%</span>
                  </label>
                  <progress
                    className="progress progress-accent"
                    value="80"
                    max="100"
                  ></progress>
                </div>
                <div
                //   data-aos="fade-right"
                //   data-aos-offset="300"
                //   data-aos-duration="1700"
                //   data-aos-easing="ease-in-sine"
                >
                  {" "}
                  <label className="label">
                    <span className="label-text">javaScript</span>
                    <span className="label-text-alt">80%</span>
                  </label>
                  <progress
                    className="progress progress-accent"
                    value="80"
                    max="100"
                  ></progress>
                </div>
                <div
                //   data-aos="fade-right"
                //   data-aos-offset="300"
                //   data-aos-duration="1900"
                //   data-aos-easing="ease-in-sine"
                >
                  <label className="label">
                    <span className="label-text">mongoDB</span>
                    <span className="label-text-alt">75%</span>
                  </label>
                  <progress
                    className="progress progress-accent"
                    value="75"
                    max="100"
                  ></progress>
                </div>
                <div
                //   data-aos="fade-right"
                //   data-aos-offset="300"
                //   data-aos-duration="2100"
                //   data-aos-easing="ease-in-sine"
                >
                  <label className="label">
                    <span className="label-text">Express.js</span>
                    <span className="label-text-alt">80%</span>
                  </label>
                  <progress
                    className="progress progress-accent"
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //right part of skills part  */}
        <div className="skills-right hidden lg:inline-block">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src="https://i.ibb.co/s61S8PY/portfolio-skills.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Skill;
