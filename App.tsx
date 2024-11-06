import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import AssignmentEditor from "./Kanbas/Courses/Assignments/AssignmentEditor";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
 return (
  <HashRouter>
  <Provider store={store}>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Labs"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
     {/* Route for AssignmentEditor with dynamic assignment ID */}
     <Route path="/assignment/:aid" element={<AssignmentEditor />} />
    </Routes>
   </div>
   </Provider>
  </HashRouter>
 );
}
