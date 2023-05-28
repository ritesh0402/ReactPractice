import { useState } from 'react'
const BasicForm = () => {
   const [username, setUsername] = useState("Ritesh")
   const updateUsername = (evt) => {
      setUsername(evt.target.value)
   }
   return (
      <div>
         <form action="" method="">
            <div>
               <label htmlFor="username">Enter the username: </label>
               <input type="text" id="username" placeholder="Username" value={username} onChange={updateUsername} />
            </div>
            <button>Submit</button>
         </form>
      </div>
   );
}

export default BasicForm; 