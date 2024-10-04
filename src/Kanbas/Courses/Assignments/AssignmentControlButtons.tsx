import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd' }}>
      <div className="d-flex align-items-center">
        <span className="me-2" style={{ fontSize: '20px', cursor: 'grab' }}>⋮⋮</span>
        <span className="me-2" style={{ fontWeight: 'bold' }}>ASSIGNMENTS</span>
      </div>
      <div className="d-flex align-items-center">
        <div className="badge bg-light text-dark" style={{ borderRadius: '20px', padding: '5px 10px', marginRight: '8px' }}>
          40% of Total
        </div>
        <BsPlus className="fs-4" style={{ fontSize: '20px', marginRight: '8px' }} />
        <IoEllipsisVertical className="fs-4" style={{ fontSize: '20px' }} />
      </div>
    </div>
  );
}
