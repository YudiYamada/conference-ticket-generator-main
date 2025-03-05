import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateTicket } from "../pages/CreateTicket";
import { TicketDetails } from "..pages/TicketDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateTicket />} />
      <Route path="/ticket" element={<TicketDetails />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
