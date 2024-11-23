import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { RootState } from '../../store';
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: RootState) => state.assignments.assignments);
  const isEditing = aid && aid !== 'new';

  const [assignment, setAssignment] = useState({
    _id: "",
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    assignTo: "Everyone",
    dueDate: new Date().toISOString().slice(0, 16),
    availableFrom: new Date().toISOString().slice(0, 16),
    availableUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
    course: cid || "",
  });

  useEffect(() => {
    if (isEditing && assignments.length > 0) {
      const foundAssignment = assignments.find(
        (assignment) => assignment._id === aid && assignment.course === cid
      );
      if (foundAssignment) {
        setAssignment({
          _id: foundAssignment._id,
          title: foundAssignment.title || "",
          description: foundAssignment.description || "",
          points: foundAssignment.points || 100,
          assignTo: foundAssignment.assignTo || "Everyone",
          dueDate: foundAssignment.dueDate || new Date().toISOString().slice(0, 16),
          availableFrom: foundAssignment.availableFrom || new Date().toISOString().slice(0, 16),
          availableUntil: foundAssignment.availableUntil || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
          course: foundAssignment.course || cid || "",
        });
        console.log("Editing assignment:", foundAssignment);
      } else {
        console.error(`No assignment found with ID ${aid} for course ${cid}`);
      }
    }
  }, [isEditing, aid, assignments, cid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const createAssignment = async (assignment: any) => {
    const newAssignment = await coursesClient.createAssignmentForCourse(
      cid as string,
      assignment
    );
    dispatch(addAssignment(newAssignment));
  };

  const handleSave = async () => {
    try {
      if (isEditing) {
        await saveAssignment(assignment);
        console.log("Assignment updated:", assignment);
      } else {
        await createAssignment(assignment);
        console.log("New assignment created:", assignment);
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Failed to save assignment:", error);
    }
  };  

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          name="title"
          className="form-control"
          value={assignment.title}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          name="description"
          className="form-control"
          rows={6}
          value={assignment.description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input
          id="wd-points"
          name="points"
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
        <input
          id="wd-assign-to"
          name="assignTo"
          className="form-control"
          value={assignment.assignTo}
          onChange={handleChange}
        />
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            type="datetime-local"
            id="wd-due-date"
            name="dueDate"
            className="form-control"
            value={assignment.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input
            type="datetime-local"
            id="wd-available-from"
            name="availableFrom"
            className="form-control"
            value={assignment.availableFrom}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            type="datetime-local"
            id="wd-available-until"
            name="availableUntil"
            className="form-control"
            value={assignment.availableUntil}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}