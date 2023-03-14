import React from "react";

const Service = () => {
  return (
    <div>
      <div className="service grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 p-10 sm:w-4/4 lg:w-3/4 m-auto mt-12">
        {/* //left part of sirvices part  */}
        <div className="service-left">
          <div className="service-Top">
            <h1>
              <span className="p-4 pl-0 text-accent">_____</span>
              <span className="bg-[#fef3c7] text-accent text-1xl p-1">
                SERVICES
              </span>
            </h1>
          </div>
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src="https://i.ibb.co/9Hh5b9v/portfolio-Services.png"
          ></img>
        </div>
        {/* right part of services part */}
        <div data-aos="fade-up" className="service-left m5">
          <div className="service-left-body py-5">
            <div>
              <h2 className="text-3xl font-semibold  py-3">
                What{" "}
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  Services
                </span>{" "}
                I Provde To My Clients In Here.
              </h2>
              <p className="text-[#A3A5A7] leading-relaxed		">
                I always want to be able to meet the goals of my clients, I
                value my services as a developer through my work.
                <span className="font-semibold text-[#1D2043]">
                  You may like my service.
                </span>{" "}
              </p>
              <div className="sirvices-point mt-10">
                <ul className="grid grid-cols-2 gap-5">
                  <li className="hover:bg-[#b91c1c] hover:text-[white] transition-colors	 duration-1000 p-3 rounded ">
                    <a> website design</a>
                  </li>
                  <li className="hover:bg-[#b91c1c] hover:text-[white] transition-colors	 duration-1000 p-3 rounded ">
                    <a>website development</a>
                  </li>
                  <li className="hover:bg-[#b91c1c] hover:text-[white] transition-colors	 duration-1000 p-3 rounded">
                    <a>website mantenants</a>
                  </li>
                  <li className="hover:bg-[#b91c1c] hover:text-[white] transition-colors	 duration-1000 p-3 rounded">
                    <a>website testing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
