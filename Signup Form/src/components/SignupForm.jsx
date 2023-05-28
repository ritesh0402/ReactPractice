import { useState } from 'react'
const SignupForm = () => {
   const [firstname, setFirstname] = useState("")
   const updateUsername = (evt) => {
      setFirstname(evt.target.value)
   }
   const [lastname, setLastname] = useState("")
   const updateLastname = (evt) => {
      setLastname(evt.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(firstname + " " + lastname)
   }
   return (
      <div>
         <form action="" method="">
            <div>
               <label htmlFor="firstname">Firstname: </label>
               <input type="text" id="firstname" placeholder="Firstname" value={firstname} onChange={updateUsername} />
            </div>
            <div>
               <label htmlFor="lastname">Lastname: </label>
               <input type="text" id="lastname" placeholder="Firstname" value={lastname} onChange={updateLastname} />
            </div>
            <button onSubmit={handleSubmit} >Submit</button>
         </form>
      </div>
   );
}

export default SignupForm; 