import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom' /** in order to navigate from one page to nother use navigate hook */

const EmployeeComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')

const [errors,setErrors]=useState({ //state variable (error) function name (seterrors)
        firstName:'',
        lastName:'',
        email:''
    })



    // function handleFirstName(e){/*passing event as a parameter*/
    //     setFirstName(e.target.value);/*to fetch value from event =>we use event.target.value*/
    // }

    // function handleLastName(e){
    //     setLastName(e.target.value);
    // }

    // function handleEmail(e){
    //     setEmail(e.target.value);
    // }
    //we can reduce the above code as: by removing {}
    const handleFirstName=(e)=> setFirstName(e.target.value);/*to fetch value from event =>we use event.target.value*/
    const handleLastName=(e)=>  setLastName(e.target.value);
    const handleEmail=(e)=>   setEmail(e.target.value);

    const navigator=useNavigate();//useNavigate is a JS function and assigained to navigator 



    function saveEmployee(e){
        e.preventDefault();/*prevent default activity happen while submiting the form*/

        if(validForm()){//as the validform function return boolean vaule ,iff its true it executes this methods 
            const employee={firstName,lastName,email}/*set all the fileds to the employee object*/
            console.log(employee)
    
            createEmployee(employee).then((response)=>{
                console.log(response.data)
                navigator('/employee') //here we call navigator with url /employees navigate to listEmployee component
            })
        }
        
    }

    function validForm(){
        let valid=true;

        const errorscopy={... errors}//...(tree dots)are spread operator to copy object into another object
   //to validate fname by (if) condition
        // if (firstName.trim()){
        //     errorscopy.firstName='';
        // }else{
        //     errorscopy.firstName='fname required';
        //     valid=false;
        // }

        // if(lastName.trim()){
        //     errorscopy.lastName='';
        // }else{
        //     errorscopy.lastName='lname required';
        //     valid=false;
        // }

        // if(email.trim()){
        //     errorscopy.email='';
        // }else{
        //     errorscopy.email='email req.';
        //     valid=false;
        // }
   
        // //as setErrors is passed to  [errors,setErrors]=useState({ define 
        // setErrors(errorscopy);

        // //retunr the valid flag
        // return valid;

        errorscopy.firstName=firstName.trim()?'':'F name req.';
        errorscopy.lastName=lastName.trim()?'':'lname req.';
        errorscopy.email=email.trim()?'':'email req';


     // Using errorsCopy to update the errors state
     setErrors(errorscopy);

     valid=!Object.values(errorscopy).some(err=>err!=='');

     return valid;

    }

  return (
    <div className='container'> {/*to display the formm in a container a*/}
    <br></br>
    <div className='row'>
    <div className='card col-md-6 offset-md-3 offset-md-3'>{/*diaplay the form within a card*/}
    <h2 className='text-center'>add emp</h2>
    <div className='card-body'>
    <form>
        <div className='form-group mb-2'>{/*margin-bottom*/}
        <label className='form-label'> employee fname</label>
        <input
        type='text'
        placeholder='enter fname'
        name='firstname'
        value={firstName}//created by using useState hook 
        className={ `form-control  ${errors.firstName ? 'is-invalid' : '' }`} //bootstrap classname='form-control
        //whenever the user enters values it has to be further taken as input, so use unit handler
        onChange={(e)=> setFirstName(e.target.value)}
        >
            </input>
        {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div> }
        </div>


        <div className='form-group mb-2'>{/*margin-bottom*/}
        <label className='form-label'> employee Lastname</label>
        <input
        type='text'
        placeholder='enter Lname'
        name='lastname'
        value={lastName}//created by using useState hook 
        //className='form-control'//bootstrap classname='form-control
        className={ `form-control  ${errors.firstName ? 'is-invalid' : '' }`}
        //whenever the user enters values it has to be further taken as input, so use unit handler
        onChange={(e)=>  setLastName(e.target.value)}
        >
        </input>
        {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div> }

        </div>


        <div className='form-group mb-2'>{/*margin-bottom*/}
        <label className='form-label'> employee email</label>
        <input
        type='text'
        placeholder='enter email'
        name='email'
        value={email}//created by using useState hook 
        //className='form-control'//bootstrap classname='form-control
        className={ `form-control  ${errors.firstName ? 'is-invalid' : '' }`}
        //whenever the user enters values it has to be further taken as input, so use unit handler
        onChange={(e)=>  setEmail(e.target.value)}
        >
        </input>
        {errors.email && <div className='invalid-feedback'> {errors.email} </div> }
        </div>

        <button className='btn btn-success'onClick={saveEmployee}>Submit</button>{/*whenever user onlick submit should handle some event*/}
    </form> {/*have to create js function to handle onClick handle*/}

    </div>
    </div>
    </div>
    </div>
  )
}

export default EmployeeComponent