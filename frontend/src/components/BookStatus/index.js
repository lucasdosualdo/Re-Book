import { Bottom, Options, Option } from "./style";
import { IoChevronDown } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

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
