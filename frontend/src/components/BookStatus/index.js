import { Options, Option } from "./style";
import { useState } from "react";

export default function BookStatus() {
  const [selectedId, setSelectedId] = useState(-1);

  function handleOptionClick(id) {
    if (selectedId === id) {
      setSelectedId(-1);
    } else {
      setSelectedId(id);
    }
  }

  const options = ["Pretendo ler", "Estou lendo", "Lido"];

  return (
    <Options>
      {options.map((option, index) => (
        <Option
          key={index}
          onClick={() => handleOptionClick(index)}
          selected={selectedId === index}
        >
          {option}
        </Option>
      ))}
    </Options>
  );
}
