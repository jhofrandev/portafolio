import { usePortafolio } from "../hooks/usePortafilio";
import { useEffect, useRef, useState } from "react";

export default function ModalAbout() {
  const { state, dispatch } = usePortafolio();
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 64, y: 60 }); // left: 4rem, top: 3.75rem aprox
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
        state.isOpenModalAbout ? "flex" : "hidden"
      } flex flex-col gap-0.5 p-0.5 h-[600px] w-[400px] border border-dotted bg-white overflow-auto`}
    >
      <div
        className="flex gap-0.5 border border-[#b9b28a] p-0.5 text-md font-[VT323] cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <h2 className="flex-auto border border-[#b9b28a] pl-1">sobre_mi.pdf</h2>
        <button
          type="button"
          className="border border-[#b9b28a] px-2 py-0 text-lg text-neutral-500"
          onClick={() => dispatch({ type: "is-open-modal-about" })}
        >
          X
        </button>
      </div>
      <article className="px-4 pt-4">
        <figure>
          <img
            className="h-40"
            src="../../public/mi-portada.png"
            alt="imagen de portada"
          />
        </figure>
        <div className="flex flex-col gap-2 mt-4">
          <p className="font-[VT323]">
            Ya son 5 años en este camino de la programación, donde me ha tocado
            transitar en distintas areas, desde auxiliar de DevOp o programar
            una ardruino y controlar alfunos sensores pero en mayor medida he
            sido desarrollador web, ya sea frontend o backenk, no se si es bueno
            o malo, pero la experiencia que me ha dejado este camino, me ayuda a
            comprender mejor muchas cosas de este mundillo.
            <br />
          </p>
        </div>
      </article>
    </div>
  );
}
