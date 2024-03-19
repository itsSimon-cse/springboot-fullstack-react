import React,{useEffect,useState} from 'react'
import {listEmployees} from '../services/EmployeeService.js'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees]= useState([])
    const navigator=useNavigate();

    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
      }).catch(error=>{
        console.error(error);
      })
    },[])

    function addNewEmployee(){
        navigator('/add-employee')
    }
  return (
    <div className='container'>
        <h1 className='text-center'>Listing Employee</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>Last name</th>
                    <th>eid</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
    {
        employees.map(employee=>  
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                    <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>update</button>
                </td>
            </tr>)
    }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent