import React, { useState } from 'react'

const EmployeeComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [LastName,setLastName]=useState('')
    const [Email,setEmail]=useState('')

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

    function saveEmployee(e){
        e.preventDefault();/*prevent default activity happen while submiting the form*/

        const employee={firstName,LastName,Email}/*set all the fileds to the employee object*/
        console.log(employee)
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
        className='form-control'//bootstrap classname='form-control
        //whenever the user enters values it has to be further taken as input, so use unit handler
        onChange={(e)=> setFirstName(e.target.value)}
        >
        </input>
        </div>


        <div className='form-group mb-2'>{/*margin-bottom*/}
        <label className='form-label'> employee Lastname</label>
        <input
        type='text'
        placeholder='enter Lname'
        name='Lastname'
        value={LastName}//created by using useState hook 
        className='form-control'//bootstrap classname='form-control
        //whenever the user enters values it has to be further taken as input, so use unit handler
        onChange={(e)=>  setLastName(e.target.value)}
        >
        </input>
        </div>


        <div className='form-group mb-2'>{/*margin-bottom*/}
        <label className='form-label'> employee email</label>
        <input
        type='text'
        placeholder='enter email'
        name='Email'
        value={Email}//created by using useState hook 
        className='form-control'//bootstrap classname='form-control
        //whenever the user enters values it has to be further taken as input, so use unit handler
        onChange={(e)=>  setEmail(e.target.value)}
        >
        </input>
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