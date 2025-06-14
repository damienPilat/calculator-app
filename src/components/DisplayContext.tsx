import { createContext, type PropsWithChildren, useState } from "react";

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
    setDisplay("0");
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
      const currentOp = operation;
      const value2 = Number(prev.split(currentOp).slice(-1));
      const tempTotal = calculate(currentOp, value2);
      setTotal(tempTotal);
      setValue(tempTotal);
      setOperation(op);
      return tempTotal.toString();
    }
  };

  const handleDecimal = (value: string) => {
    if (value.split("").slice(-1)[0] === ".") return value;
    return value + ".";
  };

  const updateDisplay = (value: string) => {
    setDisplay((prev) => {
      if (prev === "0" && [...Array(10).keys()].includes(Number(value))) {
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
