import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const JobEdit = () => {
  let { param } = useParams();
  const navigate = useNavigate();
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
    console.log(job);
    // const response = "OK";
    // const response = await fetch("/api/jobs", {
    //   method: "POST",
    //   body: JSON.stringify(job),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    const jobID_res = param.toString();
    try {
      const res = await axios.put(
        // "http://localhost:3000/api/jobs/update/" + jobID_res,
        "http://localhost:4000/api/jobs/65124e5ca895f9eeb456262b",
        job
      );
      console.log(res);
      setJobID("");
      setcapacity("");
      setunits("");
      setpanels("");
      setDesc("");
      setError(null);
      navigate("/");
      //   console.log("job updated", json);
    } catch (err) {
      // console.log(res);
      const error = err.message;
      console.log(error);
      setError(error);
      //  enqueueSnackbar(error, { variant: 'error' });
    }
    // const json = await response.json();
    // if (!response.ok) {
    //   setError(json.error);
    // }
    // if (response.ok) {
    //   setJobID("");
    //   setcapacity("");
    //   setunits("");
    //   setpanels("");
    //   setDesc("");
    //   setError(null);
    //   navigate("/");
    //   console.log("job updated", json);
    // }
  };
  return (
    <>
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

        <button>Update Job</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default JobEdit;
