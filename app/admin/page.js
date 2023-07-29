'use client'
import React from "react";
import { useAuthContext } from "../(context)/AuthContext";
import { useRouter } from "next/navigation";
import addData from "../(firebase)/addData";
import signout from "../(firebase)/auth/signout";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    const handleForm = async()=>{
        const data = {
            name:"John Snow",
            house:"Stark"
        }
        const {result,error} = await addData('users','user-id',data)
        if(error)
        {
            return console.log(error)
        }
        else {
            alert("Your vote has been casted")
        }
    }

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
        <>
    <h1>
        Only logged in users can view this page
    </h1>

    <button  onClick={signout} className="inline-flex items-center justify-center px-3 py-0 mr-1 text-base text-py-7 font-light text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Signout
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
    </>
    
    );
}

export default Page;