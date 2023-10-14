import { JobContext } from "../context/JobContext";
import { useContext } from "react";

export const useJobsContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw Error("useJobsContext must be used inside an JobContextprovider");
  }

  return context;
};
