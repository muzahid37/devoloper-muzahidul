import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects]=useState([]);
    useEffect(() => {
        fetch("Projects.json")
          .then((res) => res.json())
          .then((data) =>setProjects(data));
      }, []);
    
    return (
        <div className="my-28 w-fit lg:w-3/4 mx-auto">
        <h2 className="text-center uppercase  text-5xl text-primary my-12 ">projects</h2>
        <div className=" grid  sm:grid-cols-1 lg:grid-cols-3 gap-10 ">
          
        {
                projects.map(project=><Project
                key={project._id}
                project={project}
                ></Project>)
            }
        </div>
      </div>
        
    );
};

export default Projects;