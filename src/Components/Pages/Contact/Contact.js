import emailjs from "emailjs-com";
import React from "react";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fz9dclh",
        "template_xg7onh8",
        e.target,
        "RxxQi27GbJtHyUOiW"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="about grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 p-10 sm:w-4/4 lg:w-3/4 m-auto mt-12">
        {/* left part of about part */}
        <div data-aos="fade-up" className="about-left m5">
          <div className="about-left-top">
            <h1>
              <span className="p-4 pl-0 text-accent">______</span>
              <span className="bg-[#fef3c7] text-accent text-1xl p-1">
                CONTACT US
              </span>
            </h1>
          </div>
          <div className="about-left-body py-5">
            <div>
              <h2 className="text-3xl font-semibold text-[#A3A5A7] py-3">
                Estimate Your Project? Let Me Know Here.
              </h2>
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-3 justify-items-center mt-2"
              >
                <input
                  className="input w-full"
                  type="text"
                  name="name"
                  // disabled
                  placeholder="Your name"
                />
                <input
                  className="input w-full "
                  type="email"
                  name="userEmail"
                  // disabled
                  placeholder="Email address"
                />

                <input
                  className="input w-full "
                  type="textarea"
                  name="message"
                  placeholder="Add your message"
                />
                <input
                  className="btn w-full hover:bg-[#b91c1c] hover:text-[white] transition-colors	text-black duration-1000 bg-accent"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
        {/* //right part of about part  */}
        <div className="about-left">
          <img
            data-aos="fade-right"
            src="https://i.ibb.co/s61S8PY/portfolio-About.png"
          ></img>
        </div>
      </div>

      {/* <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          class="card p-12 bg-neutral shadow-xl"
        >
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              className="input w-full max-w-xs"
              type="text"
              name="name"
              // disabled
              placeholder="Your name"
            />
            <input
              className="input w-full max-w-xs"
              type="email"
              name="userEmail"
              // disabled
              placeholder="Email address"
            />

            <input
              className="input w-full max-w-xs"
              type="textarea"
              name="message"
              placeholder="Add your message"
            />
            <input
              className="btn btn-neutral w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Contact;
