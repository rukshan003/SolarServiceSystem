import { useJobsContext } from "../hooks/useJobsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobDetails = ({ job }) => {
  const { dispatch } = useJobsContext();
  const handleClick = async () => {
    const response = await fetch("/api/jobs/" + job._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_JOB", payload: json });
    }
  };

  return (
    <div className="job-details">
      <strong>JobID : </strong>
      <h4>{job.jobID}</h4>
      <p>
        <strong>Capacity (KW) : </strong>
        {job.Capacity}
      </p>
      <p>
        <strong>Average Units (kWh) : </strong>
        {job.AverageUnits}
      </p>
      <p>
        <strong>No of panels : </strong>
        {job.NoOfpanels}
      </p>
      <p>
        <strong>Description : </strong>
        {job.Description}
      </p>
      <p>{formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        {" "}
        delete{" "}
      </span>
    </div>
  );
};
export default JobDetails;
