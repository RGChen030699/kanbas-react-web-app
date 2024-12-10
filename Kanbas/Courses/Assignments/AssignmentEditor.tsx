import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as assignmentsClient from './client';
import { AssignmentForm } from './AssignmentTypes';

interface Assignment extends AssignmentForm {
  _id: string;
  course: string;
}

interface KanbasState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments.find((a) => a._id === aid)
  );

  const [formData, setFormData] = useState<AssignmentForm>({
    title: '',
    description: '',
    points: 100,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });


  const [assignTo, setAssignTo] = useState<string>('Everyone');

  useEffect(() => {
    if (assignment) {
      setFormData({
        title: assignment.title || '',
        description: assignment.description || '',
        points: assignment.points || 100,
        dueDate: assignment.dueDate || '',
        availableFromDate: assignment.availableFromDate || '',
        availableUntilDate: assignment.availableUntilDate || '',
      });
    }
  }, [assignment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAssignToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAssignTo(e.target.value);
  };

  const handleSave = async () => {
    try {
      if (aid && aid !== 'new') {
        const updatedAssignment = await assignmentsClient.updateAssignment({
          ...formData,
          _id: aid,
          course: cid,
        });
        dispatch(updateAssignment(updatedAssignment));
      } else {
        const newAssignment = await assignmentsClient.createAssignmentForCourse(
          cid as string,
          {
            ...formData,
            course: cid,
          }
        );
        dispatch(addAssignment(newAssignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error('Error saving assignment:', error);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="p-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="New Assignment"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Assignment Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="New Assignment Description"
        />
      </div>

      <div className="mb-3">
        <div className="row align-items-center">
          <div className="col-10">
            <label htmlFor="points" className="form-label">Points</label>
          </div>
          <div className="col-11">
            <input
              type="number"
              className="form-control"
              id="points"
              name="points"
              value={formData.points}
              onChange={handleChange}
              style={{ width: '100px' }}
            />
          </div>
        </div>
      </div>


      <div className="mb-3">
        <label htmlFor="assignTo" className="form-label">
          Assign To
        </label>
        <select
          id="assignTo"
          className="form-select"
          value={assignTo}
          onChange={handleAssignToChange}
        >
          <option value="Everyone">Everyone</option>
          <option value="Specific Section">Specific Section</option>
        </select>
      </div>

      <div className="mb-3">
        <div className="row">
          <div className="col-10">
            <label className="form-label">Assignment Dates</label>
          </div>
          <div className="col-11">
            <div className="border p-3">
              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">
                  Due
                </label>
                <div className="input-group">
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <label htmlFor="availableFromDate" className="form-label">
                    Available from
                  </label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="availableFromDate"
                      name="availableFromDate"
                      value={formData.availableFromDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="availableUntilDate" className="form-label">
                    Until
                  </label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="availableUntilDate"
                      name="availableUntilDate"
                      value={formData.availableUntilDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-end">
        <button
          type="button"
          className="btn btn-light me-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}