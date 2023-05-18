import React from 'react'


function ProjectCard({name, status, index, onChangeProject, image}) {
  const handleOnChangeProject = () => {
    onChangeProject(index)
  }
  
  return (
    <div className='mt-5 mr-10 ' onClick={handleOnChangeProject}>
      <img src={image} alt="" width={150} />
      <h1>Project Name:{name}</h1>
      <p>Status:{status}</p>
      <p>View Project</p>
    </div>
  )
}

export default ProjectCard