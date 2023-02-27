import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getExperiencesAction = createAction('EXPERIENCES/GET',(name)=>{
    return { payload:name}
})
export const ExperiencesReducer = createReducer({
    experiences:[]
}, (builder) => {
    builder
      .addCase('EXPERIENCES/GET', (state, action) => {
        state.experiences = action.payload
      }) 
  })