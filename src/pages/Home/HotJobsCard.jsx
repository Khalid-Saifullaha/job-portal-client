import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    description,
    salaryRange,
    jobType,
    company,
    requirements,
    responsibilities,
    status,
    company_logo,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <div className="flex gap-2">
        <figure>
          <img className="w-12" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-1">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap ">
          {requirements.map((skill, index) => (
            <p
              key={index}
              className="border rounded-md text-center p-2 hover:bg-gray-700"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex  ">
            Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} -{" "}
            {salaryRange.max} {salaryRange.currency}
          </p>

          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
