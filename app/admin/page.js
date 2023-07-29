'use client'
import React,{useState} from "react";
import { useAuthContext } from "../(context)/AuthContext";
import { useRouter } from "next/navigation";
import addData from "../(firebase)/addData";
import signout from "../(firebase)/auth/signout";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    const [vote,setVote] = useState("")
    const [gender,setGender] = useState("")
    const [name,setDisplayName] = useState("")
    const [ward,setWard] = useState("")
    const [dob,setDateOfBirth] = useState("")
    const [district,setDistrict] = useState("")
    const[voter_id,setVoterId] =useState("")
    const handleForm = async(e)=>{
        e.preventDefault()
        const data = {
            district,
            voter_id,
            ward,
            vote
        }
        const {result,error} = await addData(data['district'],data['voter_id'],data)
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
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center h-auto">
  <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Online Voting</h2>

      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

      
        
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Cast Your Vote Here
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleForm}>
                <div>

                </div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="name" name="name" id="name"  onChange={(e)=>setDisplayName(e.target.value)} value={name} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required/>

                  
                  <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Voter Id Number</label>
                      <input type="text" name="phone_number" id="confirm-password"   onChange={(e)=>setVoterId(e.target.value)} value = {voter_id} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>

                  <div>
                      <label htmlFor="voter_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                      <input type="date" name="date_of_birth" id="dob" placeholder="Date of birth"  onChange={(e)=>setDateOfBirth(e.target.value)} value={dob} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>


                  



                  <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ward</label>
                      <input type="text" name="school" id="current_school"   onChange={(e)=>setWard(e.target.value)} value={ward} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>

                  <div>

            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required  value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option disabled selected>Select</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    </select>
                </div>                 


                  <div>

                  <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Vote</label>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   value={vote} onChange={(e)=>setVote(e.target.value)} required>
                      <option disabled selected>Select</option>
                          <option>SKM</option>
                          <option>SDF</option>
                          <option>CAP</option>
                          <option>BJP</option>
                          <option>NOTA</option>
                    </select>
                  </div>



                  <div>
                      <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        District (School)
                      </label>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={district} onChange={(e)=>setDistrict(e.target.value)} required>
                            <option disabled selected>Select</option>
                            <option>Gangtok</option>
                            <option>Geyzing</option>
                            <option>Mangan</option>
                            <option>Namchi</option>
                            <option>Pakyong</option>
                            <option>Soreng</option>
                      </select>

                  </div>
                  <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Caste Your Vote</button> 
              </form>
          </div>
          <button  onClick={signout} className="inline-flex items-center justify-center px-3 py-0 mr-1 text-base text-py-7 font-light text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Signout
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
      </div>
    </div>
  </section> 

    )
}
   

export default Page;