import { useState } from 'react';
import { BsGripVertical, BsChevronDown, BsChevronUp } from "react-icons/bs"; 
import GreenCheckmark from "./GreenCheckmark";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const [showLessonsWeek1, setShowLessonsWeek1] = useState(false);
  const [showLessonsWeek2, setShowLessonsWeek2] = useState(false);

  const toggleWeek1Lessons = () => setShowLessonsWeek1(!showLessonsWeek1);
  const toggleWeek2Lessons = () => setShowLessonsWeek2(!showLessonsWeek2);

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

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
        }}
      >
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
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <span className="flex-grow-1 d-flex align-items-center" onClick={toggleWeek1Lessons} style={{ cursor: 'pointer' }}>
              Week 1
              {showLessonsWeek1 ? <BsChevronUp className="ms-2" /> : <BsChevronDown className="ms-2" />}
            </span>
            <ModuleControlButtons />
          </div>
          {showLessonsWeek1 && (
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="d-flex align-items-center me-2">
                  <GreenCheckmark />
                </span>
                <span className="flex-grow-1">LEARNING OBJECTIVES</span>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="d-flex align-items-center me-2">
                  <GreenCheckmark />
                </span>
                <span className="flex-grow-1">Introduction to the course</span>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="d-flex align-items-center me-2">
                  <GreenCheckmark />
                </span>
                <span className="flex-grow-1">Learn what is Web Development</span>
                <LessonControlButtons />
              </li>

              <ul className="wd-lessons list-group rounded-0" style={{ paddingLeft: "0" }}>
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="d-flex align-items-center me-2">
                    <GreenCheckmark />
                  </span>
                  <span className="flex-grow-1">LESSON 1</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="d-flex align-items-center me-2">
                    <GreenCheckmark />
                  </span>
                  <span className="flex-grow-1">LESSON 2</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ul>
          )}
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <span className="flex-grow-1 d-flex align-items-center" onClick={toggleWeek2Lessons} style={{ cursor: 'pointer' }}>
              Week 2
              {showLessonsWeek2 ? <BsChevronUp className="ms-2" /> : <BsChevronDown className="ms-2" />}
            </span>
            <ModuleControlButtons />
          </div>
          {showLessonsWeek2 && (
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="d-flex align-items-center me-2">
                  <GreenCheckmark />
                </span>
                <span className="flex-grow-1">LEARNING OBJECTIVES</span>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="d-flex align-items-center me-2">
                  <GreenCheckmark />
                </span>
                <span className="flex-grow-1">LESSON 1</span>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="d-flex align-items-center me-2">
                  <GreenCheckmark />
                </span>
                <span className="flex-grow-1">LESSON 2</span>
                <LessonControlButtons />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
