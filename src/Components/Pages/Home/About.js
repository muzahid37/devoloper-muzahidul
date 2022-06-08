import React from "react";

const About = () => {
  return ( 
      <>
      
      <h1 className="text-5xl font-bold text-neutral bg-base-200 text-center py-12">ABOUT ME</h1>
        <div class="hero h-fit pb-12 bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
      </>
    
  );
};

export default About;