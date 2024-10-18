import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor";

export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Labs"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
     {/* Route for AssignmentEditor with dynamic assignment ID */}
     <Route path="/assignment/:aid" element={<AssignmentEditor />} />
    </Routes>
   </div>
  </HashRouter>
 );
}
