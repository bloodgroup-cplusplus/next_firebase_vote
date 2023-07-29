import { signInWithEmailAndPassword,projectAuth } from "../config";

export default async function signIn(email,password)
{
    let result = null,
    error=null;

    try{
        result = await signInWithEmailAndPassword(projectAuth,email,password)
    }

    catch(e)
    {
        error=e
    }
    return {result,error};
}