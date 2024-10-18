import { useState } from 'react';
import { BsGripVertical, BsChevronDown, BsChevronUp } from "react-icons/bs"; 
import GreenCheckmark from "./GreenCheckmark";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const [showLessons, setShowLessons] = useState<{[key: string]: boolean}>({});

  const toggleLessons = (moduleId: string) => {
    setShowLessons(prevState => ({
      ...prevState,
      [moduleId]: !prevState[moduleId]
    }));
  };

  const buttonStyle = {
    backgroundColor: "#6c757d",
    color: "black",
    border: "1px solid #6c757d",
    padding: "6px 15px",
    borderRadius: "5px",
    marginRight: "20px",
    cursor: "pointer",
  };

  const redButtonStyle = {
    backgroundColor: "#B22222",
    color: "white",
    border: "none",
    padding: "6px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const courseModules = db.modules.filter((module: any) => module.course === cid);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
        <button style={buttonStyle}>Collapse All</button>
        <button style={buttonStyle}>View Progress</button>

        <div style={{ ...buttonStyle, display: 'flex', alignItems: 'center' }}>
          <GreenCheckmark />
          <select style={{ border: "none", backgroundColor: "transparent", color: "black" }}>
            <option>Publish All</option>
            <option>Unpublish All</option>
          </select>
        </div>

        <button style={redButtonStyle}>+ Module</button>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((module: any) => (
          <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="flex-grow-1 d-flex align-items-center" onClick={() => toggleLessons(module.id)} style={{ cursor: 'pointer' }}>
                {module.name}
                {showLessons[module.id] ? <BsChevronUp className="ms-2" /> : <BsChevronDown className="ms-2" />}
              </span>
              <ModuleControlButtons />
            </div>
            {showLessons[module.id] && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="d-flex align-items-center me-2">
                      <GreenCheckmark />
                    </span>
                    <span className="flex-grow-1">{lesson.name}</span>
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
