import React from 'react'


function ProjectCard({name, status, index, onChangeProject, image}) {
  const handleOnChangeProject = () => {
    onChangeProject(index)
  }
  
  return (
    <div className='mt-5 mr-10 w-48 ' onClick={handleOnChangeProject}>
      <img src={image} alt="" width={150} />
      <h1><strong>Project Name: </strong>{name}</h1>
      <p><strong>Status: </strong>{status}</p>
    </div>
  )
}

export default ProjectCard