import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, ListCards } from "../Pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<ListCards />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
