import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import assignmentsData from "../../Database/assignments.json";
import * as db from "../../Database";
import { Assignment } from "./AssignmentTypes";

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    // Add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    // Delete an assignment
    deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    // Update assignment
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        ) as any;
      },

  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments, } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;