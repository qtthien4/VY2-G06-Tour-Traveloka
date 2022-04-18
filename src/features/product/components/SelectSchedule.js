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
      label: String(element.StartTime) + "-",
    });
  });

  return (
    <div className="App">
      <br />

      <Select
        placeholder="Select Option"
        value={schedule.find((obj) => obj.idSchedule === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />

      {selectedValue && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <div>
            <b>Selected Value: </b> {selectedValue}
          </div>
        </div>
      )}
    </div>
  );
}
