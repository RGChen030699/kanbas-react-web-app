import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as db from '../../Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const [assignment, setAssignment] = useState<any>(null);

  useEffect(() => {
    const foundAssignment = db.assignments.find(
      (assignment) => assignment._id === aid && assignment.course === cid
    );
    if (foundAssignment) {
      setAssignment(foundAssignment);
    }
  }, [cid, aid]);

  if (!assignment) {
    return <div>Loading assignment details...</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" value={assignment.title} readOnly />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={6}
          value={assignment.description || 'No description available'}
          readOnly
        />
      </div>

      {/* Points */}
      <div className="mb-4">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" className="form-control" value={assignment.points || 100} readOnly />
      </div>

      {/* Assign To */}
      <div className="mb-4">
        <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
        <input id="wd-assign-to" className="form-control" value={assignment.assignTo || 'Everyone'} readOnly />
      </div>

      {/* Due Date */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            type="datetime-local"
            id="wd-due-date"
            className="form-control"
            value={assignment.dueDate || '2024-05-13T23:59'}
            readOnly
          />
        </div>
      </div>

      {/* Availability */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input
            type="datetime-local"
            id="wd-available-from"
            className="form-control"
            value={assignment.availableFrom || '2024-05-06T00:00'}
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            type="datetime-local"
            id="wd-available-until"
            className="form-control"
            value={assignment.availableUntil || '2024-05-20T00:00'}
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons as Links */}
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}