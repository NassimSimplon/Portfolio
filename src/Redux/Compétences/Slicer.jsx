import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getSkillsAction = createAction('SKILLS/GET',(data)=>{
    return { payload:data}
})
export const skillsReducer = createReducer({
  skills:[]
}, (builder) => {
    builder
      .addCase('SKILLS/GET', (state, action) => {
      
        state.skills = action.payload
      }) 
  })