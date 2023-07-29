import {app} from "../config"
import {getAuth,signOut} from "firebase/auth"
let auth =getAuth(app)
export default async function signout()
{
    let result = null;
    let error = null;
    try {
        result = await signOut(auth)
    }
    catch(e)
    {
        error = e
    }
    return {result,error}

}