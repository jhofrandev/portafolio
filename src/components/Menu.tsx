import Option from "./Option";
import ModalAbout from "./ModalAbout";
import projects from "../data/projects";
import ModalSkills from "./ModalSkills";
import ModalProject from "./ModalProject";
import ModalExpertise from "./ModalExpertise";
import { usePortafolio } from "../hooks/usePortafilio";
import { PortafolioProvider } from "../context/PortafolioContext";

export default function Menu() {
  return (
    <PortafolioProvider>
      <MenuContent />
      <ModalAbout />
      <ModalExpertise />
      <ModalSkills />
      <ModalProject />
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
          <li>
            <button
              type="button"
              className="flex gap-1 items-center w-full text-left"
              onClick={() =>
                dispatch({
                  type: "is-open-modal-expertise",
                })
              }
            >
              <i className="fa-regular fa-file-lines"></i>
              experiencia.pdf
            </button>
          </li>
          <li className="flex gap-1">
            <button
              type="button"
              className="flex gap-1 items-center w-full text-left"
              onClick={() =>
                dispatch({
                  type: "is-open-modal-skills",
                })
              }
            >
              <i className="fa-regular fa-file-lines"></i>
              habilidades.pdf
            </button>
          </li>
        </ul>
      </Option>

      <Option typeOption={1} nameOption="Proyectos">
        <ul className="h-32 border border-dashed border-[#B9B28A] rounded-lg pl-4 py-1 grid grid-cols-1 overflow-auto text-neutral-500 text-sm font-[VT323]">
          <div>
            {projects.map((project) => (
              <li key={project.id} className="flex gap-1 items-center">
                <button
                  type="button"
                  className="flex gap-1 items-center w-full text-left"
                  onClick={() =>
                    dispatch({
                      type: "show-project",
                      payload: { id: project.id },
                    })
                  }
                >
                  <i className="fa-regular fa-file-lines"></i>
                  {project.title}.pdf
                </button>
              </li>
            ))}
          </div>
        </ul>
      </Option>

      <Option typeOption={1} nameOption="Blog" />
    </article>
  );
}
