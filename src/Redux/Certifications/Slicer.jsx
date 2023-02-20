import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getCertificationsAction = createAction('CERTIFICATIONS/GET',(data)=>{
    return { payload:data}
})
export const CertificationsReducer = createReducer({
  certifications:[]
}, (builder) => {
    builder
      .addCase('CERTIFICATIONS/GET', (state, action) => {
      
        state.certifications = action.payload
      }) 
  })