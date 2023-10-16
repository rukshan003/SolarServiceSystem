import { useState } from "react";
import { useJobsContext } from "../hooks/useJobsContext";

const JobForm = () => {
  //   const { dispatch } = useJobsContext();
  const [jobID, setJobID] = useState("");
  const [Capacity, setcapacity] = useState("");
  const [AverageUnits, setunits] = useState("");
  const [NoOfpanels, setpanels] = useState("");
  const [Description, setDesc] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const job = { jobID, Capacity, AverageUnits, NoOfpanels, Description };
    const response = await fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setJobID("");
      setcapacity("");
      setunits("");
      setpanels("");
      setDesc("");
      setError(null);

      console.log("new job added", json);
      dispatch({ type: "CREATE_JOBS", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Project</h3>
      <br />
      <label>Job Id :</label>
      <input
        type="text"
        onChange={(e) => setJobID(e.target.value)}
        value={jobID}
      />

      <label>Capacity(kW) :</label>
      <input
        type="number"
        min="1"
        max="1000"
        onChange={(e) => setcapacity(e.target.value)}
        value={Capacity}
      />

      <label>Generate Average Units(kWh) :</label>
      <input
        type="number"
        onChange={(e) => setunits(e.target.value)}
        value={AverageUnits}
      />

      <label>Number of panels used :</label>
      <input
        type="text"
        onChange={(e) => setpanels(e.target.value)}
        value={NoOfpanels}
      />

      <label>Description :</label>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={Description}
      />

      <button>Add Job</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default JobForm;
