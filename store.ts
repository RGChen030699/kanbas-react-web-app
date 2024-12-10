import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./Dashboard/reducer";
import { EnrollmentState } from "./Dashboard/DashboardTypes";

export interface RootState {
  modulesReducer: any;
  accountReducer: any;
  assignmentsReducer: any;
  enrollmentReducer: EnrollmentState;
}

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentReducer
  }
});


export type AppDispatch = typeof store.dispatch;
export default store;