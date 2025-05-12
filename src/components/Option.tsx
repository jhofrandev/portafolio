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
  const { state, dispatch } = usePortafolio();

  return (
    <>
      <button
        className="block cursor-pointer"
        onClick={() => dispatch({ type: "is-open-option" })}
      >
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
      </button>
      {state.isOpenOption && children}
    </>
  );
}
