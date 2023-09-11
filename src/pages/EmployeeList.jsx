import React from "react";

const EmployeeList = () => {
  const people = [
    {
      name: "Rohit Yadav",
      dob: "25-7-1995",
      startDate: "1-2-2022",
      endDate: "10-3-2023",
      description:
        "Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications.",
    },
    {
      name: "Kunal Soni",
      dob: "25-7-1992",
      startDate: "1-2-2022",
      endDate: "10-3-2023",
      description:
        "Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications.",
    },
    {
      name: "Naveen Kumar",
      dob: "5-7-1995",
      startDate: "1-2-2022",
      endDate: "10-3-2023",
      description:
        "Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications.",
    },
  ];

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
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.dob}</td>
                <td>{person.startDate}</td>
                <td>{person.endDate}</td>
                <td className="description">{person.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
