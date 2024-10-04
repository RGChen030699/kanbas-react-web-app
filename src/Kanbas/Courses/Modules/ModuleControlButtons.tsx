import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <div style={{  top: '3px' }}>
        <GreenCheckmark />
      </div>
      <BsPlus className="fs-4" style={{ fontSize: '20px', marginLeft: '8px' }} />
      <IoEllipsisVertical className="fs-4" style={{ fontSize: '20px', marginLeft: '8px' }} />
    </div>
  );
}
