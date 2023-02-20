import axios from "axios";
import { getProjectsAction } from "./Slicer";
import { PROJECTS_URL } from "../../Utils/ApiUrls";

//@GET
export const getProjects = async (dispatch)=>{
    const result = await axios.get(PROJECTS_URL).then(res=>{
        dispatch(getProjectsAction(res.data))
    })
    return result;
}