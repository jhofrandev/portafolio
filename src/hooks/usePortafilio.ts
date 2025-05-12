import { useContext } from "react";
import { PortafolioContext } from "../context/PortafolioContext";

export const usePortafolio = () => {
  const context = useContext(PortafolioContext);
  if (!context) {
    throw new Error("usePortafolio must be used within an PortafolioProvider");
  }
  return context;
};
