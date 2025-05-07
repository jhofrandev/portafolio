import Option from "./Option";

export default function Menu() {
  return (
    <article className="pt-4 mx-4">
      <Option typeOption={0} nameOption="Información">
        <ul className="pl-4 text-neutral-500 text-sm font-[VT323]">
          <li className="flex gap-1">
            <i className="fa-regular fa-file-lines"></i>
            <p>sobre_mi.pdf</p>
          </li>
          <li className="flex gap-1">
            <i className="fa-regular fa-file-lines"></i>
            <p>experiencia.pdf</p>
          </li>
          <li className="flex gap-1">
            <i className="fa-regular fa-file-lines"></i>
            <p>habilidades.pdf</p>
          </li>
        </ul>
      </Option>

      <Option typeOption={0} nameOption="Proyectos">
        <ul className="pl-4 text-neutral-500 text-sm font-[VT323]">
          <li className="flex gap-1">
            <i className="fa-regular fa-file-lines"></i>
            sobre_mi.pdf
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

      <Option typeOption={1} nameOption="Blog" />
    </article>
  );
}
