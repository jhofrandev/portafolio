import { useState } from "react";

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
  const [isOpenOption, setIsOpenOption] = useState(true);

  const handleClick = () => {
    setIsOpenOption(!isOpenOption);
  };

  return (
    <button className="mb-2 block" onClick={handleClick}>
      <span className="flex gap-1 items-center text-neutral-500 font-[VT323]">
        {typeOption === 0 && isOpenOption ? (
          <i className="fa-solid fa-folder-open"></i>
        ) : (
          <i className="fa-solid fa-folder-closed"></i>
        )}
        <span>{nameOption}</span>
        {typeOption === 0 && isOpenOption && (
          <i className="text-xs fa-regular fa-square-caret-down"></i>
        )}
      </span>
      {isOpenOption && children}
    </button>
  );
}
