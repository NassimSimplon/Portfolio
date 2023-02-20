import axios from "axios";
import { getSkillsAction } from "./Slicer";
import { SKILLS_URL } from "../../Utils/ApiUrls";

//@GET
export const getSkills = async (dispatch)=>{
    const result = await axios.get(SKILLS_URL).then(res=>{
        dispatch(getSkillsAction(res.data))
    })
    return result;
}