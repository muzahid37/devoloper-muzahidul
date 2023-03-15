import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutMe = () => {
  return (
    // <div
    //   data-aos="fade-right"
    //   data-aos-easing="linear"
    //   data-aos-duration="1500"
    // >
    //   <h1 className="text-5xl font-bold text-neutral bg-base-200 text-center py-12">
    //     ABOUT ME
    //   </h1>
    //   <div className="hero h-fit pb-12 bg-base-200">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <div className="profile-container">
    //         <img
    //           src="https://i.ibb.co/HxT7hDk/myphoto.jpg"
    //           className="max-w-sm rounded-lg shadow-2xl profile"
    //         />
    //       </div>

    //       <div className="">
    //         {/* <h1 className="text-4xl text-neutral font-bold">
    //           I'm a Web Developer
    //         </h1>
    //         <p className="py-6 text-2xl">
    //           Hi there, This is Md Muzahidul islam and I have been working on
    //           web design and web development for 1.5 years and I have
    //           accumulated all the great experiences while working in this
    //           sector. Bangladesh is my motherland. I am currently learning more
    //           new programing technology and I have fallen in love with
    //           programing technology. I have been working for a long time with
    //           great success on how to handle projects with clients, leadership
    //           skills, communication skills and a number of other skills. As the
    //           days go by, new technologies are being discovered and their demand
    //           and popularity are increasing, I actually prefer to work with
    //           those new technologies, but the web development profession is
    //           above all my preferences.
    //         </p>
    //         <Link className="btn btn-primary" to="/AboutUs">
    //           {" "}
    //           see Details
    //         </Link> */}
    //         <div className="w-2/4">
    //           <img src=""></img>
    //         </div>
    //         <div className="w-2/4"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="about grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 p-10 sm:w-4/4 lg:w-3/4 m-auto mt-24">
        {/* left part of about part */}
        <div data-aos="fade-up" className="about-left m5">
          <div className="about-left-top">
            <h1>
              <span className="p-4 pl-0 text-accent">______</span>
              <span className="bg-[#fef3c7] text-accent text-1xl p-1">
                ABOUT ME
              </span>
            </h1>
          </div>
          <div className="about-left-body py-5">
            <div>
              <h1 className="text-5xl">Hi,</h1>
              <h1
                // data-aos="fade-up"
                // data-aos-easing="linear"
                // data-aos-duration="1500"

                className="text-5xl"
              >
                I am{" "}
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  className=" text-accent"
                >
                  Muzahidul
                </span>
              </h1>
              <h2 className="text-3xl font-semibold text-[#A3A5A7] py-3">
                Full stack developer
              </h2>
              <p className="text-[#A3A5A7] leading-relaxed		">
                Hey are looking for developer to{" "}
                <span className="font-semibold text-[#1D2043]">
                  build your Brand and gorw your business ?
                </span>{" "}
                let's shake hands with me.
              </p>
              <button className=" hover:bg-[#b91c1c] hover:text-[white] transition-colors	 duration-1000 bg-accent p-3 mt-12 rounded-sm">
                {" "}
                Conntact me
              </button>
            </div>
          </div>
        </div>
        {/* //right part of about part  */}
        <div className="about-right relative">
          {/*  https://i.ibb.co/9G7BdYH/shape-two.png*/}
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="animation-img absolute right-0"
            src="https://i.ibb.co/P50CYBG/shape-one.png
           
"
          ></img>
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="animation-img absolute left-2/4 top-3.5	"
            src="https://i.ibb.co/9G7BdYH/shape-two.png
           
"
          ></img>
          <img
            data-aos="fade-left"
            src="https://i.ibb.co/s61S8PY/portfolio-About.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
