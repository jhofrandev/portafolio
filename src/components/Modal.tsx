import { usePortafolio } from "../hooks/usePortafilio";
import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const { state, dispatch } = usePortafolio();
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    x: (window.innerWidth - 400) / 2,
    y: 120,
  }); // left: 4rem, top: 3.75rem aprox
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    // Centrar horizontalmente al abrir el modal
    if (modalRef.current) {
      const modalWidth = modalRef.current.offsetWidth;
      const windowWidth = window.innerWidth;
      setPosition((prev) => ({
        ...prev,
        x: (windowWidth - modalWidth) / 2,
      }));
    }
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
      className={`${
        state.isOpen ? "flex flex-col gap-0.5" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black/70 z-40`}
    >
      <div
        ref={modalRef}
        style={{
          left: position.x,
          top: position.y,
          position: "fixed",
          zIndex: 50,
        }}
        className={`${
          state.isOpen ? "flex flex-col gap-0.5" : "hidden"
        } p-0.5 w-[400px] border border-dashed border-[#b9b28a] bg-white overflow-auto`}
      >
        <div
          className="flex gap-0.5 border border-[#b9b28a] p-0.5 text-md font-[VT323] cursor-move select-none"
          onMouseDown={handleMouseDown}
        >
          <h2 className="flex-auto border border-[#b9b28a] pl-1">
            trabajemos-juntos.pdf
          </h2>
          <button
            type="button"
            className="border border-[#b9b28a] px-2 py-0 text-lg text-neutral-500"
            onClick={() => dispatch({ type: "is-open-modal" })}
          >
            X
          </button>
        </div>
        <article className="px-4 pt-4">
          <form className="flex flex-col gap-2">
            <input
              className="border-b border-dashed border-[#B9B28A] p-2 mb-4 placeholder:text-2xl placeholder:font-bold"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="border-b border-dashed border-[#B9B28A] p-2 mb-4 placeholder:text-2xl placeholder:font-bold"
              type="email"
              placeholder="Correo Electrónico"
            />
            <textarea
              className="border-b border-dashed border-[#B9B28A] p-2 mb-4 placeholder:text-2xl placeholder:font-bold"
              rows={4}
              placeholder="Mensaje"
            ></textarea>
            <button
              className="cursor-pointer text-[#FF9F00] font-[VT323] font-semibold border border-dashed uppercase text-xl mb-4 hover:text-[#ffd900]"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}
