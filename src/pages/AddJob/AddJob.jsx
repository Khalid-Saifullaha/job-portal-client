import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(min, max, currency, newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Post a new job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue={"Pick a job type"}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Pick a job type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>

        {/* Job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            defaultValue={"Pick a job Field"}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Pick a job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* salary range */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <select
              defaultValue={"Currency"}
              name="currency"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="Job Description"
            required
          ></textarea>
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="requirements"
            placeholder="Put each requirements in a new line"
            required
          ></textarea>
        </div>

        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="responsibilities"
            placeholder="Write each responsibilities in a new line"
            required
          ></textarea>
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>

        {/* application deadline*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Deadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>

        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
