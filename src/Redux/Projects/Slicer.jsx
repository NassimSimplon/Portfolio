import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getProjectsAction = createAction('PROJECTS/GET',(name)=>{
    return { payload:name}
})
export const ProjectsReducer = createReducer({
  projects:[]
}, (builder) => {
    builder
      .addCase('PROJECTS/GET', (state, action) => {
        state.projects = action.payload
      }) 
  })