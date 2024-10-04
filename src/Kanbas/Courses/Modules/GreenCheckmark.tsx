import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle 
        style={{ top: "6px", left: "-1px" }}  // Added left property
        className="text-success me-1 position-absolute fs-5" 
      />
      <FaCircle 
        className="text-white me-1 fs-6" 
        style={{ left: "0" }} // You can also add left here if needed
      />
    </span>
  );
}
