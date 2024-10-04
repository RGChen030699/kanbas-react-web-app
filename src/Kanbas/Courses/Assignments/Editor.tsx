export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" value="A1" />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" rows={6}>
          The assignment is available online. Submit a link to the landing page of your web application running on Netlify.
          The landing page should include the following:
          - Your full name and section
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories
        </textarea>
      </div>

      {/* Assignment Details */}
      <div className="row mb-4">
        {/* Points */}
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" className="form-control" value={100} />
        </div>

        {/* Assignment Group */}
        <div className="col-md-3">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-control">
            <option>ASSIGNMENTS</option>
          </select>
        </div>

        {/* Display Grade As */}
        <div className="col-md-3">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
          <select id="wd-display-grade-as" className="form-control">
            <option>Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select id="wd-submission-type" className="form-control">
          <option>Online</option>
        </select>

        <div className="mt-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-website-url" checked />
            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-file-upload" />
            <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
          </div>
        </div>
      </div>

      {/* Assign To, Due Date, Availability */}
      <div className="row mb-4">
        <div className="col-md-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
          <select id="wd-assign-to" className="form-control">
            <option>Everyone</option>
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Availability</label>
          <div className="d-flex">
            <input type="datetime-local" id="wd-available-from" className="form-control me-2" value="2024-05-06T00:00" />
            <span className="me-2">Until</span>
            <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-20T00:00" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-light me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
