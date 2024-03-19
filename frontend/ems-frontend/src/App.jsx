
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter> 
    <HeaderComponent/>
      <Routes>
        {/*/ http://localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
         {/*/ http://localhost:3000/employee */}
        <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
        {/*/ http://localhost:3000/employee/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        {/*/ http://localhost:3000/employee/edit-employee/1 as it has to change dynamically using :id*/}
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter> 
    </>          /* again from here move to HelloWorld.jsx*/  
  )
}

export default App;
export {HeaderComponent}

