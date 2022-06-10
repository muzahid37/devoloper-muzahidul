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
    <div className="my-28 w-3/4 mx-auto ">
      <h2 className="text-center uppercase  text-5xl text-primary py-12 ">
        Contuct us
      </h2>
      <div className=" grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          class="card p-12 bg-neutral text-white shadow-xl"
        >
          <h2>Get in Touch</h2>
          <p>
            If you have any query want to ask me or want to give me any
            important message, you can send me a message at any time and yes, I
            will try to reply to your message in your email.
          </p>
          <h2>Name:Md Muzahidul islam</h2>
          <h2>Phone:01776436494</h2>
          <h2>Email:muzahidul372709@gmail.com</h2>
        </div>
        <div
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
        </div>
      </div>
    </div>

    // <div class="hero min-h-screen bg-base-200">
    //   <div class=" flex-col lg:flex-row flex gap-7 p-12 w-3/4">
    //       <div className="w-2/4">
    //           <h2>Get in Touch</h2>
    //           <p>If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
    //           <h2>Name:Md Muzahidul islam</h2>
    //           <h2>Phone:01776436494</h2>
    //           <h2>Email:muzahidul372709@gmail.com</h2>
    //       </div>
    //       <div className="w-2/4 ">
    //       <form
    //           onSubmit={onSubmit}
    //           className="grid grid-cols-1 gap-3 justify-items-center mt-2"
    //         >
    //           <input
    //             className="input w-full max-w-xs"
    //             type="text"
    //             name="name"
    //             // disabled
    //             placeholder="Your name"
    //           />
    //           <input
    //             className="input w-full max-w-xs"
    //             type="email"
    //             name="userEmail"
    //             // disabled
    //             placeholder="Email address"
    //           />

    //           <input
    //             className="input w-full max-w-xs"
    //             type="textarea"
    //             name="message"
    //             placeholder="Add your message"
    //           />
    //             <input
    //             className="btn btn-neutral w-full max-w-xs"
    //             type="submit"
    //             value="Submit"
    //           />

    //         </form>
    //       </div>

    //   </div>
    // </div>
  );
};

export default Contact;
