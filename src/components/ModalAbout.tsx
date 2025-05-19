export default function ModalAbout() {
  return (
    <div className="fixed top-9 left-13 flex flex-col gap-0.5 p-0.5 h-[575px] w-96 border border-dotted bg-white overflow-auto">
      <article className="flex gap-0.5 border border-[#b9b28a] p-0.5 text-md font-[VT323]">
        <h2 className="flex-auto border border-[#b9b28a] pl-1">sobre_mi.pdf</h2>
        <a
          href="/"
          className="border border-[#b9b28a] px-2 py-0 text-lg text-neutral-500"
        >
          X
        </a>
      </article>
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
            Soy Jhofran B., un desarrollador Full-Stack con más de 5 años de
            experiencia creando soluciones web robustas y eficientes. He
            contribuido en roles de Frontend, Backend y DevOps, especializándome
            en Python (Django, FastAPI) y React.js para el diseño de interfaces
            intuitivas y APIs de alto rendimiento.
          </p>
          <p className="font-[VT323]">
            Mi trayectoria incluye proyectos para distintas entidades públicas y
            privadas, demostrando adaptabilidad y un enfoque en la entrega de
            valor.
          </p>
        </div>
      </article>
    </div>
  );
}
