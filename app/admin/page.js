'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "../(firebase)/addData";
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

    return (<h1>
        Only logged in users can view this page
        {handleForm}

    </h1>);
}

export default Page;