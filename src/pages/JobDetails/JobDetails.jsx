import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const { title, company, deadline } = job;
  return (
    <div className="m-10">
      <h2>Job Details for {title}</h2>
      <p>Apply for: {company}</p>
      <p>Deadline: {deadline}</p>
      <button className="btn btn-primary">Apply Now</button>
    </div>
  );
};

export default JobDetails;
