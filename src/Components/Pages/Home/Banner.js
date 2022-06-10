import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen banner-bg text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl">I am</h1>
            <h1 className="text-5xl font-bold">Md Muzahidul Islam</h1>
            <h1 className="text-5xl ">I build the website.</h1>

            <p className="py-6 text-2xl">
              I’m a web developer specializing in building exceptional digital
              experiences. Now i am learning web devolopment day by day.
            </p>
            <a href="https://drive.google.com/file/d/1waqiwOk9MeTMYhIG-ndgjCcxRl5dVqWl/view?usp=sharing" target="_blank">
              {" "}
              <button className="btn btn-primary ">Get MY REsume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
