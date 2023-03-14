import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div class="hero min-h-fit bg-neutral">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold py-48 text-white">About us</h1>
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col ">
          <div data-aos="zoom-in-up" className="profile-container">
            <img
              src="https://i.ibb.co/HxT7hDk/myphoto.jpg"
              className="max-w-sm rounded-lg shadow-2xl profile"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-3/4 pt-12"
          >
            <h1 className="text-4xl text-neutral font-bold">
              I'm a Web Developer
            </h1>
            <p className="py-6 text-2xl">
              Hi there, This is Md Muzahidul islam and I have been working on
              web design and web development for 1.5 years and I have
              accumulated all the great experiences while working in this
              sector. Bangladesh is my motherland. I am currently learning more
              new programing technology and I have fallen in love with
              programing technology. I have been working for a long time with
              great success on how to handle projects with clients, leadership
              skills, communication skills and a number of other skills. As the
              days go by, new technologies are being discovered and their demand
              and popularity are increasing, I actually prefer to work with
              those new technologies, but the web development profession is
              above all my preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
