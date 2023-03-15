import React from "react";

const Project = ({ project }) => {
  const { projectsName, ProjectsURL, image, description } = project;

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="card w-fit lg:w-96  bg-base-100 shadow-xl"
      >
        <figure class="">
          <img src={image} alt="" class="rounded-xl w-full" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{projectsName}</h2>
          <p>{description}</p>
          <div class="card-actions">
            <button class="btn w-full hover:bg-[#b91c1c] hover:text-[white] transition-colors	text-black duration-1000 bg-accent">
              details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
