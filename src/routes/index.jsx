import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateTicket } from "./CreateTicket";
import { TicketDetails } from "./TicketDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateTicket />} />
      <Route path="/ticket" element={<TicketDetails />} />
    </Routes>
  );
};

export default AppRoutes;
