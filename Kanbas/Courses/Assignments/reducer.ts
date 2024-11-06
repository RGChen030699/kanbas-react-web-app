import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import assignmentsData from "../../Database/assignments.json";
import { Assignment } from './AssignmentTypes';

const initialState = {
  assignments: assignmentsData as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }: PayloadAction<Omit<Assignment, "_id">>) => {
      const newAssignment: Assignment = {
        _id: `a_${new Date().getTime()}`,
        ...assignment,
      };
      console.log("Adding assignment:", newAssignment);
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
      console.log("Deleting assignment with ID:", assignmentId);
      state.assignments = state.assignments.filter((assignment) => assignment._id !== assignmentId);
    },
    updateAssignment: (state, { payload }: PayloadAction<Assignment>) => {
      console.log("Updating assignment:", payload);
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === payload._id ? payload : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;