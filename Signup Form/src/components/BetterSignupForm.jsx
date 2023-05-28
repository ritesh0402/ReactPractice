import { useState } from 'react'
const BetterSignupForm = () => {

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      password: ""
   })

   const updateForm = (evt) => {
      const updatedField = evt.target.name;
      const updatedValue = evt.target.value;
      setFormData((data) => {
         return { ...data, [updatedField]: updatedValue };
      })
   }

   const handleSubmit = (evt) => {
      evt.preventDefault()
      console.log(formData)
   }

   return (
      <div>
         <form action="" method="">
            <div>
               <label htmlFor="firstName">Firstname: </label>
               <input
                  type="text"
                  id="firstName"
                  name='firstName'
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={updateForm}
               />
            </div>
            <div>
               <label htmlFor="lastName">Lastname: </label>
               <input
                  type="text"
                  id="lastName"
                  name='lastName'
                  placeholder="Firstname"
                  value={formData.lastName}
                  onChange={updateForm}
               />
            </div>
            <div>
               <label htmlFor="password">Password: </label>
               <input
                  type="password"
                  id="password"
                  name='password'
                  placeholder="password"
                  value={formData.password}
                  onChange={updateForm}
               />
            </div>
            <button onSubmit={handleSubmit} >Submit</button>
         </form>
      </div>
   );
}

export default BetterSignupForm; 