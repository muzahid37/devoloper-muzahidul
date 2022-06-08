import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-neutral text-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          
          <div>
              <h1 className="text-3xl">I am</h1>
            <h1 className="text-5xl font-bold">Md Muzahidul Islam</h1>
            <h1 className="text-5xl ">I build the website.</h1>
            
            <p class="py-6 text-2xl">
            I’m a web developer specializing in building exceptional digital experiences. Now i am learning web devolopment day by day.
            </p>
            <button class="btn btn-primary ">Get MY REsume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
