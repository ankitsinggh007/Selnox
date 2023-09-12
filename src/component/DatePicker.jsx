import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
  placeholder,
  label,
  className,
  setValue,
  value,
  disabled,
  name,
}) => {

  const [selectedDate, setSelectedDate] = useState(null);

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (date) => {
    const originalDate = new Date(date);
    const formattedDate = formatDate(originalDate);
    setSelectedDate(formattedDate);
    setValue(formattedDate, name);
  };


  return (
    <span className={className}>
      <label className="label">{label}</label>
      <DatePicker
        showIcon
        value={value}
        disabled={disabled}
        onChange={handleDateChange}
        name={name}
        dateFormat="MM/dd/yyyy"
        placeholderText={placeholder}
      />
    </span>
  );
};

export default CustomDatePicker;
