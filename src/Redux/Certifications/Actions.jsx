import axios from "axios";
import { getCertificationsAction } from "./Slicer";
import { CERTIFICATIONS_URL } from "../../Utils/ApiUrls";

//@GET
export const getCertifications = async (dispatch)=>{
    const result = await axios.get(CERTIFICATIONS_URL).then(res=>{
        dispatch(getCertificationsAction(res.data))
    })
    return result;
}