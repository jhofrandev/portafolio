import { useState } from "react";
import { usePortafolio } from "../hooks/usePortafilio";

type OptionProps = {
  readonly children?: React.ReactNode;
  readonly typeOption: number;
  readonly nameOption: string;
};

export default function Option({
  children,
  typeOption,
  nameOption,
}: OptionProps) {
  const [openChildren, setOpenChildren] = useState(false);
  const { state, dispatch } = usePortafolio();

  const handleOnClick = (option: string) => {
    if (option === "Información") {
      dispatch({ type: "is-open-option" });
      setOpenChildren(!openChildren);
    } else if (option === "Proyectos") {
      dispatch({ type: "is-open-option-project" });
      setOpenChildren(!openChildren);
    }
  };

  return (
    <>
      <button
        className="block cursor-pointer"
        onClick={() => handleOnClick(nameOption)}
      >
        {nameOption === "Información" ? (
          <span className="flex gap-1 items-center text-neutral-500 font-[VT323]">
            {typeOption === 0 && state.isOpenOption ? (
              <i className="fa-solid fa-folder-open"></i>
            ) : (
              <i className="fa-solid fa-folder-closed"></i>
            )}
            <span>{nameOption}</span>
            {typeOption === 0 && state.isOpenOption && (
              <i className="text-xs fa-regular fa-square-caret-down"></i>
            )}
          </span>
        ) : (
          <span className="flex gap-1 items-center text-neutral-500 font-[VT323]">
            {typeOption === 0 && state.isOpenOptionProject ? (
              <i className="fa-solid fa-folder-open"></i>
            ) : (
              <i className="fa-solid fa-folder-closed"></i>
            )}
            <span>{nameOption}</span>
            {typeOption === 0 && state.isOpenOptionProject && (
              <i className="text-xs fa-regular fa-square-caret-down"></i>
            )}
          </span>
        )}
      </button>
      {openChildren && children}
    </>
  );
}
