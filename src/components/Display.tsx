import { useContext } from "react";
import { DisplayContext } from "@/components/DisplayContext.tsx";

function Display() {
  const { display } = useContext(DisplayContext);
  return (
    <div className="border-2 border-solid rounded-md" id="display">
      <p>{display}</p>
    </div>
  );
}
export default Display;

// 3 + 5 * 6 - 2 / 4
