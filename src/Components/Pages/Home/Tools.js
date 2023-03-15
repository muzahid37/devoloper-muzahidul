import React from "react";

const Tools = () => {
  return (
    <div>
      <div>
        <div className="tools grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 p-10 sm:w-4/4 lg:w-3/4 m-auto mt-12">
          {/* left part of tools part */}
          <div data-aos="fade-up" className="tools-left m5">
            <div className="tools-left-top">
              <h1>
                <span className="p-4 pl-0 text-accent">______</span>
                <span className="bg-[#fef3c7] text-accent text-1xl p-1">
                  My Weapons
                </span>
              </h1>
            </div>
            <div className="tools-left-body py-5">
              <div>
                <h1 className="text-5xl">Hi,</h1>

                <h2 className="text-3xl font-semibold text-[#A3A5A7] py-3">
                  My
                  <span
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className=" text-accent"
                  >
                    Favorite Tools
                  </span>{" "}
                  Which I Used Everyday In My Life.
                </h2>
                <p className="text-[#A3A5A7] leading-relaxed		">
                  I have always loved the software I use in my work because I am
                  very good at it, these are the main tools in my development
                  career that help me ensure client satisfaction.
                </p>
                <button className=" hover:bg-[white] hover:text-[#b91c1c] hover:underline transition-colors	 duration-1000  p-3 mt-12 rounded-sm">
                  {" "}
                  Let's see my work process
                </button>
              </div>
            </div>
          </div>
          {/* //right part of tools part  */}
          <div data-aos="flip-left" className="tools-right  grid grid-cols-3 ">
            {/* <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              src="https://i.ibb.co/s61S8PY/portfolio-tools.png"
            ></img> */}
            <div className="flex justify-around flex-col">
              {/* https://i.ibb.co/ZcgXB7n/npm.jpg https://i.ibb.co/8myF9HQ/trello.png
            https://i.ibb.co/hc6MV8f/firebase.png
            https://i.ibb.co/0BG96BP/netliflt.png
            https://i.ibb.co/PTHyKX1/github-mark-white.png
            https://i.ibb.co/cyDNTnt/figma.png
            <div className="flex justify-around flex-col"> */}
              <div className=" rounded-full">
                <img
                  data-aos="zoom-in"
                  className="w-36"
                  src="https://i.ibb.co/ZcgXB7n/npm.jpg https://i.ibb.co/8myF9HQ/trello.png"
                ></img>
              </div>
              <div className="rounded-full">
                <img
                  data-aos="zoom-in-right"
                  className="w-48	"
                  src="  https://i.ibb.co/hc6MV8f/firebase.png"
                ></img>
              </div>
              <div className="rounded-full">
                <img
                  data-aos="zoom-in-left"
                  className="w-40"
                  src="   https://i.ibb.co/0BG96BP/netliflt.png"
                ></img>
              </div>
            </div>
            <div className="middle_tools w-80 h-60 mt-40">
              <div className="fingam_img">
                <img
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="w-52"
                  src=" https://i.ibb.co/cyDNTnt/figma.png"
                ></img>
              </div>
            </div>
            <div className="last-tools-row flex justify-around flex-col">
              <div className="github_image w-32 ml-14 rounded-lg">
                <img
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="bg-[black] rounded-full"
                  src="https://i.ibb.co/PTHyKX1/github-mark-white.png"
                ></img>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
