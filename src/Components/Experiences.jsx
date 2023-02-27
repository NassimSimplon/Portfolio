import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from '../Redux/Experiences/Actions';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

function Experiences() {
    const dispatch = useDispatch();
    //Selectors
     const experiencesState = useSelector((state) => state.experiences.experiences);
   React.useEffect(()=>{
    getExperiences(dispatch);
   },[]);
  return (
    <div id='Experiences'>
     <div className='top_bar'>
     <h1>Experiences</h1>
     </div>
        <DragDropContainer targetKey="foo"  render={() =>{ return <div>Drag Me!</div>}}>
    
    </DragDropContainer>

    <DropTarget targetKey="foo" >
    </DropTarget>
    </div>
  )
}

export default Experiences  