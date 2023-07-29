import { getFirestore,doc,setDoc, projectFirestore } from "./config";

export default async function addData(collection,id,data)
{
    let result = null; 
    let error = null;
    try {
        result = await setDoc(doc(projectFirestore,collection,id),data,{
            merge:true
        });
    }
    catch(e)
    {
        error = e
    }

    return {result,error};
}
