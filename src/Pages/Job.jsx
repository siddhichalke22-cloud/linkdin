import { useState } from "react";
import Sidebar from '../components/Sidebar.jsx';

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
    <div className="home-layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      
      <div className="feed">
        <div className="card">
          <h2 style={{ marginBottom: '16px' }}>Recommended Jobs</h2>
          {jobs.length === 0 && <p style={{ color: 'gray' }}>No more recommended jobs.</p>}
          {jobs.map((job) => (
            <div
              key={job.id}
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "flex-start",
                padding: "16px 0",
                borderBottom: "1px solid #ebebeb",
              }}
            >
              <img src={`https://logo.clearbit.com/${job.domain}`} width="48" height="48" style={{ objectFit: 'contain' }} alt={`${job.company} Logo`} onError={(e) => { e.target.style.display = 'none' }} />
              
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 4px 0", fontSize: '16px' }}>{job.title}</h3>
                <p style={{ margin: "0 0 4px 0", fontSize: '14px' }}>{job.company}</p>
                <p style={{ margin: "0 0 8px 0", color: "gray", fontSize: '12px' }}>{job.location}</p>
                
                <p style={{ margin: "5px 0", fontSize: '12px' }}>
                  <span style={{ color: "#057642", fontWeight: "600", display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="16" height="16" focusable="false">
                      <path d="M20 4v1H8v16h8v2H4V4h16zm-7 14l-4.5-4.5 1.4-1.4 3.1 3.1 7.3-7.3 1.4 1.4L13 18z"></path>
                    </svg> Easy Apply
                  </span>
                </p>

                <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button 
                    onClick={() => handleApply(job)}
                    style={{ backgroundColor: "#0a66c2", color: "white", border: "none", padding: "6px 16px", borderRadius: "24px", cursor: "pointer", fontWeight: "600", fontSize: '14px', flex: '1 1 auto', maxWidth: '120px' }}
                  >
                    Apply
                  </button>
                  <button 
                    onClick={() => alert(`Saved ${job.title} job!`)}
                    style={{ backgroundColor: "transparent", color: "#666", border: "1px solid #666", padding: "6px 16px", borderRadius: "24px", cursor: "pointer", fontWeight: "600", fontSize: '14px', flex: '1 1 auto', maxWidth: '120px' }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="right-sidebar">
        <div className="card">
          <h2 style={{ marginBottom: '16px' }}>Applied Jobs</h2>
          {appliedJobs.length === 0 && <p style={{ color: 'gray', fontSize: '14px' }}>You haven't applied to any jobs yet.</p>}
          {appliedJobs.map((job) => (
            <div key={job.id} style={{ borderBottom: "1px solid #ebebeb", padding: "10px 0" }}>
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong style={{ display: 'block', color: '#191919' }}>{job.title}</strong>
                <span style={{ color: '#666' }}>{job.company}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}