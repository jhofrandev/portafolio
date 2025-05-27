import { usePortafolio } from "../hooks/usePortafilio";
import { useEffect, useRef, useState } from "react";

export default function ModalProject() {
  const { state, dispatch } = usePortafolio();
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 6, y: 60 }); // left: 4rem, top: 3.75rem aprox
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div
      ref={modalRef}
      style={{
        left: position.x,
        top: position.y,
        position: "fixed",
        zIndex: 50,
      }}
      className={`${
        state.activeId > 0 ? "flex" : "hidden"
      } flex flex-col gap-0.5 p-0.5 h-[600px] w-[400px] border border-dashed border-[#b9b28a] bg-white overflow-auto`}
    >
      <div
        className="flex gap-0.5 border border-[#b9b28a] p-0.5 text-md font-[VT323] cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <h2 className="flex-auto border border-[#b9b28a] pl-1">
          {state.projectActive.title}
        </h2>
        <button
          type="button"
          className="border border-[#b9b28a] px-2 py-0 text-lg text-neutral-500"
          onClick={() => dispatch({ type: "hidden-project" })}
        >
          X
        </button>
      </div>
      <article className="px-4 pt-4">
        <figure>
          <img
            className="h-40"
            src={state.projectActive.imageUrl}
            alt={`imagen de ${state.projectActive.title}`}
          />
        </figure>
        <div className="flex flex-col gap-2 mt-4 text-xl leading-6">
          <p className="font-[VT323]">
            {state.projectActive.description}
            <a
              href={state.projectActive.pageUrl}
              className="block font-semibold mt-3 mb-2"
            >
              Ver: Página web
            </a>
            <a
              href={state.projectActive.codeUrl}
              className="block font-semibold mt-3 mb-2"
            >
              Código: GitHub
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
