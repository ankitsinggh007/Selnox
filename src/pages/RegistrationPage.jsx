import React, { useEffect, useState } from "react";
import calender from "../assets/calender.svg";
import CustomDatePicker from "../component/DatePicker";
import RichTextEditor from "../component/RichTextEditor";
import { useParams,useNavigate } from 'react-router-dom';
const RegistrationPage = ({type,EmployeeList,setEmployeeList}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const degreeOptions = [
    "B.E",
    "B.Tech",
    "B.Sc",
    "B.Com",
    "BBA",
    "BCA",
    "M.Tech",
    "M.Sc",
    "MBA",
    "MCA",
    "Other",
  ];
  const [employee, setEmployee] = useState({
    DOB: null,
    Study: "",
    StartDate: "",
    EndDate: "",
    Description: "",
    LastName: "",
    CurrentSalary: "",
    FirstName: "",
  });
  const { id } = useParams();

const navigate = useNavigate();
  const setValues = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleDates = (date, name) => {
    setEmployee({ ...employee, [name]: date });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDescription = (description) => {
    setEmployee({ ...employee, Description: description });
  };

  useEffect(()=>{
    if(type!=="Register"){
      const data=EmployeeList.find((obj)=>{
        return obj.id==id
      });
      setEmployee({...data});
    }
  },[]);

  const addEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://sweede.app/DeliveryBoy/Add-Employee/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(employee), // Convert the employee data to JSON format
        }
      );

      if (!response.ok) {
      alert("Network response was not ok")

        throw new Error("Network response was not ok");
      }

      const data = await response.json();
       // Parse the response JSON
      setEmployeeList([...EmployeeList,employee]);
      navigate("/employee-list",{ replace: true })
      
      // Return the response data (e.g., newly created employee details)
    } catch (error) {
      alert("Add Employee error")
      console.error("Add Employee error:", error);
      throw error; // Rethrow the error for handling at the caller level
    }
  };
  const updateEmployee=async(e)=>{
    e.preventDefault();

    try {
      const response = await fetch(`https://sweede.app/DeliveryBoy/update-Employee/${id}`, {
        method: 'PUT', // Use the appropriate HTTP method for updating
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(employee), // Convert the updated data to JSON
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Optionally, you can handle the response if needed
      const updatedEmployee = await response.json();
      return updatedEmployee;
    } catch (error) {
      console.error('Update error:', error);
      throw error; // Optionally, rethrow the error to handle it higher up
    }
  }

  return (
    <form className="container" onSubmit={ type==='Register'?addEmployee:updateEmployee}>
     {
      type!=="View" && 
      <legend className="legend">Employee {type==='Register'?'Registration':'Update'} Form</legend>
     }
     {
      type=="View" &&
      <legend className="legend">Employee Details</legend>
     }
      <div className="subContainer">
        <span className="section">
          <label className="label">First Name*</label>
          <input
            type="text"
            className="input"
            readOnly={type==='View'}
            onChange={setValues}
            value={employee.FirstName}
            name="FirstName"
            placeholder="Enter your fisrt name"
          ></input>
        </span>
        <span className="section">
          <label className="label">Last Name*</label>
          <input
            type="text"
            className="input"
            onChange={setValues}
            readOnly={type==='View'}

            value={employee.LastName}
            name="LastName"
            placeholder="Enter your last name"
          ></input>
        </span>
      </div>

      <div className="inputForm">
        <CustomDatePicker
          label="DOB"
          name="DOB"
          setValue={handleDates}
          value={employee.DOB}
          disabled={type==='View'}

          className={"DOB"}
          selected={selectedDate}
          onChange={handleDateChange}
          placeholder="Enter your dob"
        />
      </div>

      <div className="inputForm">
        <label for="study" class="input-label">
          Study
        </label>
        <div class="custom-dropdown">
          <select
            id="study"
            name="Study"
            disabled={type==='View'}

            onChange={setValues}
            class="dropdown-input"
          >
            {degreeOptions.map((obj, index) => {
              return (
                <option key={index}defaultValue={employee.Study} value={obj}>
                  {obj}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="subContainer">
        <CustomDatePicker
          label="Start Date"
          name="StartDate"
          setValue={handleDates}
          disabled={type==='View'}
          value={employee.StartDate}
          className={"section"}
          placeholder="2-6-22"
        />

        <CustomDatePicker
          label="End Date"
          className={"section"}
          name="EndDate"
          disabled={type==='View'}

          setValue={handleDates}
          value={employee.EndDate}
          placeholder="7-6-22"
        />
      </div>

      <div className="inputForm">
        <label className="label">Current Salary</label>
        <input
          type="number"
          className="salary-input"
          onChange={setValues}
          readOnly={type==='View'}

          value={employee.CurrentSalary}
          name="CurrentSalary"
          placeholder="Enter your Current Salary"
        ></input>
      </div>

      <div className="">
        <label className="label">Description</label>
        <RichTextEditor
          value={employee.Description}
          handleDescription={handleDescription}
        />
      </div>

    { type!=="View" &&  <div className="subContainer">
        <span className="">
          <button
            type="submit"
            className="button"
            style={{ backgroundColor: "#e3e3e3" }}
          >
            Cancel
          </button>
        </span>
        <span>
          <button
            type="submit"
            className="button"
            style={{ backgroundColor: "#263857", color: "white" }}
          >
            {type==='Register'?'Register':'Update'}
          </button>
        </span>
      </div>}
    </form>
  );
};

export default RegistrationPage;
