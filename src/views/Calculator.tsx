import NumberKeys from "@/components/NumberKeys.tsx";
import Display from "@/components/Display.tsx";
import { DisplayProvider } from "@/components/DisplayContext.tsx";

function Calculator() {
  return (
    <DisplayProvider>
      <div className="w-fit grid gap-1">
        <Display />
        <NumberKeys />
      </div>
    </DisplayProvider>
  );
}
export default Calculator;
