import React,{useState,useEffect} from "react";
import {GrFormView} from "react-icons/gr";
import {MdModeEditOutline} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import { Link } from "react-router-dom";
const EmployeeListing = ({EmployeeList,setEmployeeList}) => {
  const [openRowId, setOpenRowId] = useState(null);

  

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openRowId !== null &&
        !event.target.closest(".toolbar") &&
        !event.target.closest(".edit-option")
      ) {
        // Close the toolbar if the click is outside the toolbar or the three-dot icon
        handleCloseToolbar();
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openRowId]);
  



  



  const handleOpenToolbar = (rowId) => {
    setOpenRowId(rowId);
  };
  
  const handleCloseToolbar = () => {
    setOpenRowId(null);
  };
const DeleteFunc=async(employeeId)=>{
    try {
        const response = await fetch(`https://sweede.app/DeliveryBoy/delete-Employee/${employeeId}`, {
          method: 'DELETE',
        });
    
        if (!response.ok) {
          throw new Error('Delete request was not successful');
        }
    
        // Remove the deleted employee from the state
        setEmployeeList((prevEmployee) =>
          prevEmployee.filter((employee) => employee.id !== employeeId)
        );
        
        // Close the toolbar
        handleCloseToolbar();
      } catch (error) {
        console.error('Delete error:', error);
      }
}
const ViewFunc=()=>{

}
const EditFunc=()=>{}


  return (
    <>
      <span className="headline">Employee List</span>

      <div className="container1">
        <table>
          <thead>
            <tr className="title">
              <th>Name</th>
              <th>DOB</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {EmployeeList?.map((person, index) => (
              <tr key={index}>
                <td>{person.FirstName+" "+person.LastName}</td>
                <td>{person.DOB}</td>
                <td>{person.StartDate}</td>
                <td>{person.EndDate}</td>
                <td className="description">
                    <span>{person.Description}</span>
                <span className="edit-option" onClick={() => handleOpenToolbar(index)} >&#8942;</span>
                {openRowId === index && (
        <div className="toolbar">
          <Link className="tool" to={`/view-user/${person.id}`} >
            <GrFormView/>
            <span>View</span>
            </Link>
          <Link className="tool" to={`/edit-user/${person.id}`} >
           <MdModeEditOutline/> 
            <span>Edit</span></Link>
          <button className="tool" onClick={()=>{DeleteFunc(person.id)}}>
            <AiFillDelete/>
            <span>Delete</span></button>
        </div>
      )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeListing;
