import React from "react";

const Project = ({project}) => {
    const{projectsName,ProjectsURL,image,description}=project;
    
  return (
<>
<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={image} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{projectsName}</h2>
    <p>{description}</p>
    <div class="card-actions">
      <button class="btn btn-primary">details</button>
    </div>
  </div>
</div>
</>
  );
};

export default Project;
