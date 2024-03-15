
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
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
        <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter> 
    </>          /* again from here move to HelloWorld.jsx*/  
  )
}

export default App;
export {HeaderComponent}

