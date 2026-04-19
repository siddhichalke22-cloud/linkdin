import { useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      domain: "google.com"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      domain: "amazon.com"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Pune",
      domain: "microsoft.com"
    },
  ]);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (job) => {
    setAppliedJobs([...appliedJobs, job]);
    setJobs(jobs.filter((j) => j.id !== job.id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recommended Jobs</h2>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            gap: "15px",
            alignItems: "flex-start",
            backgroundColor: "white",
            borderRadius: "8px"
          }}
        >
          <img src={`https://logo.clearbit.com/${job.domain}`} width="40" alt={`${job.company} Logo`} onError={(e) => { e.target.style.display = 'none' }} />
          
          <div>
            <h3 style={{ margin: "0 0 5px 0" }}>{job.title}</h3>
            <p style={{ margin: "0 0 5px 0" }}>{job.company}</p>
            <p style={{ margin: "0 0 5px 0", color: "gray" }}>{job.location}</p>
            
            <p style={{ margin: "5px 0" }}>
              <span style={{ color: "green", fontWeight: "bold" }}>Easy Apply</span>
            </p>

            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <button 
                onClick={() => handleApply(job)}
                style={{ backgroundColor: "#0a66c2", color: "white", border: "none", padding: "6px 16px", borderRadius: "24px", cursor: "pointer", fontWeight: "bold" }}
              >
                Apply
              </button>
              <button 
                onClick={() => alert(`Saved ${job.title} job!`)}
                style={{ backgroundColor: "transparent", color: "gray", border: "1px solid gray", padding: "6px 16px", borderRadius: "24px", cursor: "pointer", fontWeight: "bold" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2>Applied Jobs</h2>

      {appliedJobs.map((job) => (
        <div key={job.id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
          <p style={{ margin: 0 }}>
            <strong>{job.title}</strong> at {job.company}
          </p>
        </div>
      ))}
    </div>
  );
}