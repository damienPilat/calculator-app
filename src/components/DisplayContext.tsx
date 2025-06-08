import { createContext, PropsWithChildren, useState } from "react";

type DisplayContextType = {
  display: string;
  updateDisplay: (value: string) => void;
};

const DisplayContext = createContext<DisplayContextType>({
  display: "0",
  updateDisplay: () => {},
});

const DisplayProvider = ({ children }: PropsWithChildren) => {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);

  const resetState = () => {
    setOperation("");
    setValue(0);
    setTotal(0);
  };

  const calculate = (op: string, value2: number): number => {
    switch (op) {
      case "+":
        return value + value2;
      case "-":
        return value - value2;
      case "x":
        return value * value2;
      case "/":
        return value / value2;
      case "=":
      default:
        return total;
    }
  };

  const handleOperation = (prev: string, op: string): string => {
    if (!operation) {
      setValue(Number(prev));
      setOperation(op);
      return "-1";
    } else {
      const currentOp = op === "=" ? operation : op;
      const value2 = Number(prev.split(currentOp).slice(-1));
      console.log(value2);
      const tempTotal = calculate(currentOp, value2);
      console.log(tempTotal);
      setTotal(tempTotal);
      setValue(tempTotal);
      return tempTotal.toString();
    }
  };

  const handleDecimal = (value) => {
    return;
  };

  const updateDisplay = (value: string) => {
    setDisplay((prev) => {
      if (prev === "0") {
        return value;
      }
      switch (value) {
        case "AC":
          resetState();
          return "0";
        case "+":
        case "-":
        case "/":
        case "x":
          handleOperation(prev, value);
          return prev + value;
        case "=":
          return handleOperation(prev, value);
        case ".":
          return handleDecimal(prev);
        default:
          return prev + value;
      }
    });
  };

  return (
    <DisplayContext.Provider value={{ display, updateDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayContext, DisplayProvider };
