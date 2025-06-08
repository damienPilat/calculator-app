import CalcButton from "@/components/CalcButton.tsx";
import { useContext } from "react";
import { DisplayContext } from "@/components/DisplayContext.tsx";

function NumberKeys() {
  const { updateDisplay } = useContext(DisplayContext);
  const calcNumberKeys = [
    { id: "one", value: "1" },
    { id: "two", value: "2" },
    { id: "three", value: "3" },
    { id: "four", value: "4" },
    { id: "five", value: "5" },
    { id: "six", value: "6" },
    { id: "seven", value: "7" },
    { id: "eight", value: "8" },
    { id: "nine", value: "9" },
  ];

  const handleOnClick = (value: string) => {
    updateDisplay(value);
  };

  const calcNumberKeysButtons = calcNumberKeys
    .reverse()
    .map((element) => (
      <CalcButton
        id={element.id}
        value={element.value}
        onClick={handleOnClick}
      />
    ));

  return (
    <div className="flex gap-1">
      <div className="grid grid-cols-3 w-auto rtl gap-1">
        <CalcButton
          onClick={handleOnClick}
          id="clear"
          value="AC"
          variant="destructive"
          className="col-span-2"
        />
        <CalcButton
          onClick={handleOnClick}
          id="divide"
          value="/"
          variant="default"
        />
        {calcNumberKeysButtons}
        <CalcButton
          onClick={handleOnClick}
          id="zero"
          value="0"
          className="col-span-2"
        />
        <CalcButton onClick={handleOnClick} id="decimal" value="." />
      </div>
      <div className="flex flex-col gap-1">
        <CalcButton
          onClick={handleOnClick}
          id="multiply"
          value="x"
          variant="default"
        />
        <CalcButton
          onClick={handleOnClick}
          id="subtract"
          value="-"
          variant="default"
        />
        <CalcButton
          onClick={handleOnClick}
          id="add"
          value="+"
          variant="default"
        />
        <CalcButton
          onClick={handleOnClick}
          id="equals"
          value="="
          className="flex-grow-2"
          variant="destructive"
        />
      </div>
    </div>
  );
}
export default NumberKeys;
