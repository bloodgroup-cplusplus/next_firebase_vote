import { createUserWithEmailAndPassword,projectAuth } from "../config"

export default async function signUp(email,password)
{
    let result = null ,
    error = null ;
    try {
        result = await createUserWithEmailAndPassword(projectAuth,email,password)
    } catch(e)
    {
        error=e;
    }
    return {result,error}
}