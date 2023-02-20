import axios from "axios";
import { getEducationAction } from "./Slicer";
import { EDUCATION_URL } from "../../Utils/ApiUrls";

//GET
export const getEducation = async (dispatch)=>{
    const result = await axios.get(EDUCATION_URL).then(res=>{
        dispatch(getEducationAction(res.data))
    })
    return result;
}