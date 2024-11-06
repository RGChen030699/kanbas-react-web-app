import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialEnrollments: string[] = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: {
    enrolledCourses: initialEnrollments
  },
  reducers: {
    enroll: (state, action: PayloadAction<string>) => {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload);
        localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      }
    },
    unenroll: (state, action: PayloadAction<string>) => {
      state.enrolledCourses = state.enrolledCourses.filter(id => id !== action.payload);
      localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
    },
    setEnrollments: (state, action: PayloadAction<string[]>) => {
      state.enrolledCourses = action.payload;
      localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
    }
  }
});

export const { enroll, unenroll, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
