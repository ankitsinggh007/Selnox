import React,{useState} from 'react'
import calender from "../assets/calender.svg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegistrationPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const degreeOptions = [
        "B.E. (Bachelor of Engineering)",
        "B.Tech (Bachelor of Technology)",
        "B.Sc (Bachelor of Science)",
        "B.A (Bachelor of Arts)",
        "B.Com (Bachelor of Commerce)",
        "BBA (Bachelor of Business Administration)",
        "BCA (Bachelor of Computer Applications)",
        "B.Arch (Bachelor of Architecture)",
        "M.E. (Master of Engineering)",
        "M.Tech (Master of Technology)",
        "M.Sc (Master of Science)",
        "M.A (Master of Arts)",
        "M.Com (Master of Commerce)",
        "MBA (Master of Business Administration)",
        "MCA (Master of Computer Applications)",
        "M.Arch (Master of Architecture)",
        "MS (Master of Science)",
        "Ph.D. (Doctor of Philosophy)",
        "Ed.D. (Doctor of Education)",
        "Diploma in [Specific Field]",
        "Certificate in [Specific Field]",
        "High School",
        "Vocational Training",
        "Online Courses",
        "Other",
      ];
      

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <form className='container'>


<legend className='legend'>Employee Registration Form</legend>
        <div className='subContainer'>
            <span className='section'>
            <label className='label'>First Name</label>
            <input type="text" className='input' placeholder="Enter your fisrt name"></input>
            </span>
            <span className='section'>
            <label className='label'>Last Name</label>
            <input type="text" className='input' placeholder="Enter your last name"></input>
            </span>
        </div>

        <div className='inputFormDOB'>
      <label htmlFor="dob" className='label'>DOB</label>
      <DatePicker
      showIcon
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Enter your dob"
        className=" input" 
      />
    </div>
        
        <div className='inputForm'>
        <label for="study" class="input-label">Study</label>
  <div class="custom-dropdown">
    <select id="study" class="dropdown-input">
    {
        degreeOptions.map((obj,index)=>{
            return <option key={index} value={obj}>{obj}</option>
        })
    }
  </select>
        </div>
        </div>

        <div className='subContainer'>
            <span className='inputForm'>
            <label className='label'>Start Date</label>
             <DatePicker
      showIcon
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Enter your dob"
        className=" input" 

      />
            </span>
            <span className='inputForm'>
            <label className='label'>End Date</label>
            <DatePicker
      showIcon
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Enter your dob"
        className=" input" 
      />
            </span>
        </div>

        <div className='inputForm'>
        <label className='label'>Current Salary</label>
            <input type="number" className='input' placeholder="Enter your Current Salary"></input>
        </div>

        <div className='inputForm'>
        <label className='label'>Description</label>
            <textarea type="text" rows={5} className='input' placeholder="Enter your Current Salary"></textarea>
        </div>

<div className='subContainer'>
            <span className=''>
           <button type='submit' className='button' style={{backgroundColor:'#e3e3e3'}}>Cancel</button>
            </span>
            <span>
            <button type='submit' className='button' style={{backgroundColor:'#263857',color:"white"}}>Submit</button>

            </span>
        </div>

    </form>
  )
}

export default RegistrationPage