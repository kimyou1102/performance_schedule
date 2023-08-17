import React from "react";
import Side from "../components/Sidebar/Side";
import Calendar from "../components/Calendar/Calendar";
import { useIsMobile } from "../hooks/useIsMobile";

function CalendarPage() {
  const isMobile = useIsMobile();
  return (
    <div style={{ position: "relative" }}>
      {!isMobile ? <Side /> : null}
      <Calendar />
    </div>
  );
}

export default CalendarPage;
