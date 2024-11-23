import { BsGripVertical, BsChevronDown, BsChevronUp } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };


  // Fetch modules from the server
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  // Create a new module for the course
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
    setModuleName("");
  };

  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div className="wd-modules">
      {isFaculty && (
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
          <button
            style={{
              backgroundColor: "#B22222",
              color: "white",
              padding: "6px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={createModuleForCourse}
          >
            + Module
          </button>
          <input
            className="form-control w-50 d-inline-block ms-2"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            placeholder="New Module Name"
          />
        </div>
      )}

      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            style={{ backgroundColor: "#f1f1f1", border: "1px solid #ddd" }}
          >
            <div
              className="wd-title p-3 ps-2 d-flex align-items-center"
              style={{ backgroundColor: "#e0e0e0" }}
            >
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing ? (
                <span style={{ flexGrow: 1 }}>{module.name}</span>
              ) : (
                <input
                  className="form-control w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                />
              )}

              {isFaculty && (
                <div style={{ marginLeft: "auto" }}>
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => removeModule(moduleId)}
                    editModule={() => dispatch(editModule(module._id))}
                  />
                </div>
              )}
            </div>

            {module.showLessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li
                    key={lesson.id}
                    className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
                  >
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