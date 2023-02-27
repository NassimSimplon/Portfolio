import axios from "axios";
import { getExperiencesAction } from "./Slicer";
import { EXPERIENCES_URL } from "../../Utils/ApiUrls";

//@GET
export const getExperiences = async (dispatch)=>{
    const result = await axios.get(EXPERIENCES_URL).then(res=>{
        dispatch(getExperiencesAction(res.data))
    })
    return result;
}