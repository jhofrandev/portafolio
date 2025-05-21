import Option from "./Option";
import { PortafolioProvider } from "../context/PortafolioContext";
import ModalAbout from "./ModalAbout";
import { usePortafolio } from "../hooks/usePortafilio";

export default function Menu() {
  return (
    <PortafolioProvider>
      <MenuContent />
      <ModalAbout />
    </PortafolioProvider>
  );
}

function MenuContent() {
  const { dispatch } = usePortafolio();

  return (
    <article className="pt-4 mx-4">
      <Option typeOption={1} nameOption="Información">
        <ul className="pl-4 text-neutral-500 text-sm font-[VT323]">
          <li>
            <button
              type="button"
              className="flex gap-1 items-center w-full text-left"
              onClick={() =>
                dispatch({
                  type: "is-open-modal-about",
                })
              }
            >
              <i className="fa-regular fa-file-lines"></i>
              sobre_mi.pdf
            </button>
          </li>
          <li className="flex gap-1">
            <i className="fa-regular fa-file-lines"></i>
            experiencia.pdf
          </li>
          <li className="flex gap-1">
            <i className="fa-regular fa-file-lines"></i>
            habilidades.pdf
          </li>
        </ul>
      </Option>

      <Option typeOption={1} nameOption="Proyectos">
        <ul className="h-32 border border-dotted border-[#B9B28A] rounded-lg pl-4 py-1 grid grid-cols-1 overflow-auto text-neutral-500 text-sm font-[VT323]">
          <div>
            <li className="flex gap-1 items-center">
              <i className="fa-regular fa-file-lines"></i>
              sobre_mi.pdf
              <span className="rounded bg-[#2DAA9E] px-0.5 text-xs text-white font-medium">
                LAB
              </span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-regular fa-file-lines"></i>
              experiencia.pdf
              <span className="rounded bg-[#F3C623] px-0.5 text-xs text-white font-medium">
                PERS
              </span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-regular fa-file-lines"></i>
              habilidades.pdf
              <span className="rounded bg-[#B8001F] px-0.5 text-xs text-white font-medium">
                PRIV
              </span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-regular fa-file-lines"></i>
              sobre_mi.pdf
              <span className="rounded bg-[#2DAA9E] px-0.5 text-xs text-white font-medium">
                LAB
              </span>
            </li>
          </div>
        </ul>
      </Option>

      <Option typeOption={1} nameOption="Blog" />
    </article>
  );
}
