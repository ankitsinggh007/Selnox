import { RegistrationPage,EmployeeListing } from './pages';
import './App.css';
import RichTextEditor from './component/RichTextEditor';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [EmployeeList, setEmployeeList] = useState([]);
  console.log(EmployeeList,"EmployeeList");

  useEffect(() => {
    // Call the getUser function to fetch user data when the component mounts
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await fetch("https://sweede.app/DeliveryBoy/Get-Employee/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      
      setEmployeeList(data);
      
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
    <nav className='nav'>
      <Link className='item' to="/employee-list">Employee List</Link>
    
      <Link className='item' to="/register-user">Register User</Link>
    </nav>
    <Routes>
      <Route path="/employee-list" element={<EmployeeListing EmployeeList={EmployeeList} setEmployeeList={setEmployeeList}/>} />
      <Route path="/register-user" element={<RegistrationPage type={"Register"} EmployeeList={EmployeeList} setEmployeeList={setEmployeeList} />} />
      <Route path="/edit-user/:id" element={<RegistrationPage type={"Edit"} EmployeeList={EmployeeList} setEmployeeList={setEmployeeList} />} />
      <Route path="/view-user/:id" element={<RegistrationPage type={"View"} EmployeeList={EmployeeList} setEmployeeList={setEmployeeList} />} />
      </Routes>
    </>
  );
}

export default App;
