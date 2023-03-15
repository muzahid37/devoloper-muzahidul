import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      {/* <div className="hero min-h-screen banner-bg text-white">
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
            <a
              href="https://drive.google.com/file/d/1ScBIompJzaPosQPLhx0vksetl_wgc4BV/view?usp=share_link"
              target="_blank"
            >
              {" "}
              <button className="btn btn-primary ">Get MY REsume</button>
            </a>
          </div>
        </div>
      </div> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/TgmKBph/19362653.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen	shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/TgmKBph/19362653.jpg"
            className="max-w-sm rounded-lg w-96	 shadow-2xl"
          />
          <div className="heroContent w-1/2	">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
