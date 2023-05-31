import React from "react";
import Side from "../components/Sidebar/Side";
import Calendar from "../components/Calendar/Calendar";

function CalendarPage() {
  return (
    <div style={{ position: "relative" }}>
      <Side />
      <Calendar />
    </div>
  );
}

export default CalendarPage;
