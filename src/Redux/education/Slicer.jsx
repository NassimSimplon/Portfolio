import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getEducationAction = createAction('EDUCATION/GET',(name)=>{
    return { payload:name}
})
export const educationReducer = createReducer({
  education:[]
}, (builder) => {
    builder
      .addCase('EDUCATION/GET', (state, action) => {
      
        state.education = action.payload
      }) 
  })