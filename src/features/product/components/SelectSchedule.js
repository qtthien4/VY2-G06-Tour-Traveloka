import React, { useState } from "react";
import Select from "react-select";

export default function SelectSchedule({
  selectedValue,
  schedule,
  handleChange,
}) {
  const data = [];
  //   console.log(schedule1[0].IdSchedule);
  schedule.forEach((element) => {
    data.push({
      value: element.IdSchedule,
      label:
        "Từ ngày: " +
        String(element.StartTime).split("T")[0] +
        " đến " +
        String(element.EndTime).split("T")[0],
    });
  });
  return (
    <div style={{ width: "90%", marginTop: "-42px" }}>
      <br />
      <Select
        placeholder="Chọn thời gian"
        value={schedule.find((obj) => obj.idSchedule === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
  );
}
