import './form.css'

import React from 'react'
import View from '../view/View'
export default function Form({changeHandler,submit}) {
    return (
        <div className ="form">
            <form onSubmit = {submit}>
                <div>
                    <label htmlFor = "firstname">First Name</label>
                    <input id = 'firstname' type="text" name= "firstname" onChange={changeHandler} required/>
                </div>
;
                <div>
                    <label htmlFor = "lastname">Last Name</label>
                    <input type="text" id= "lastname" name= "lastname" onChange={changeHandler} required/>
                </div>

                <div>
                    <label htmlFor = "phonenumber">Phonenumber</label>
                    <input type="number" id= "phonenumber" name= "phonenumber" onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor = "message">Message here</label>
                    <textarea type ='text' id = 'message' name = 'message' onChange={changeHandler} required></textarea>
                </div>
                
                <div>
                    <label htmlFor = "role">Role</label>
                    <select name="role" id="role" onChange={changeHandler}>
                        <option value="manager">Manager</option>
                        <option value="hr manager">HR</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <input type="submit" value="Submit" id= 'submit' />
            </form>
        </div>
    )
}
