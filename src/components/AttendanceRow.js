import React, { useState } from "react";

const AttendanceRow = () => {
  const initialStatus = [
    "Present",
    "Absent",
    "Present",
    "Present",
    "Absent",
    "Absent"
  ];
  const times = [
    "9:10 - 10:10",
    "10:10 - 11:10",
    "11:10 - 12:10",
    "12:10 - 01:10",
    "01:40 - 02:40",
    "02:40 - 03:40"
  ];

  const [attendance, setAttendance] = useState(initialStatus);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...attendance];
    updated[index] = value;
    setAttendance(updated);
  };

  const toggleEdit = () => setEditMode(!editMode);

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      {times.map((time, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div>{time}</div>
          {editMode ? (
            <select
              value={attendance[i]}
              onChange={(e) => handleChange(i, e.target.value)}
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          ) : (
            <div style={{ color: attendance[i] === "Present" ? "green" : "red" }}>
              {attendance[i]}
            </div>
          )}
        </div>
      ))}
      <button onClick={toggleEdit}>{editMode ? "Save" : "Edit"}</button>
    </div>
  );
};

export default AttendanceRow;
