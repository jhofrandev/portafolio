import { usePortafolio } from "../hooks/usePortafilio";
import { useEffect, useRef, useState } from "react";

export default function ModalExpertise() {
  const { state, dispatch } = usePortafolio();
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 6, y: 65 }); // left: 4rem, top: 3.75rem aprox
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
        state.isOpenModalExpertise ? "flex flex-col gap-0.5" : "hidden"
      } p-0.5 h-[600px] w-[400px] border border-dashed border-[#b9b28a] bg-white overflow-auto`}
    >
      <div
        className="flex gap-0.5 border border-[#b9b28a] p-0.5 text-md font-[VT323] cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <h2 className="flex-auto border border-[#b9b28a] pl-1">
          experiencia.pdf
        </h2>
        <button
          type="button"
          className="border border-[#b9b28a] px-2 py-0 text-lg text-neutral-500"
          onClick={() => dispatch({ type: "is-open-modal-expertise" })}
        >
          X
        </button>
      </div>
      <article className="px-4 pt-4">
        <div className="my-2 py-4 border-t border-dashed border-[#B9B28A] font-[VT323] text-xl leading-6">
          <h3>Corporación P.C.A | Monitor, Bootcamps - Análisis de datos</h3>
          <p className="text-black/40">Abril 2025 - Presente</p>
          <p className="flex gap-2 items-start text-lg leading-5 mt-4">
            <span className="">|</span>
            Monitor de Bootcamps de Análisis de Datos, donde se imparten
            conocimientos sobre herramientas como Excel, Power BI, Python y SQL.
            Se realizan prácticas y proyectos para aplicar los conocimientos
            adquiridos.
          </p>
        </div>
        <div className="my-2 py-4 border-t border-dashed border-[#B9B28A] font-[VT323] text-xl leading-5">
          <h3>SENA | Full-Stack, Investigador</h3>
          <p className="text-black/40"> Abril 2023 - Noviembre 2024</p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Colaboré como investigador principal en el proyecto SENNOVA
            SGPS-13188-2024, enfocado en desarrollar soluciones innovadoras para
            la construcción de viviendas populares mediante la aplicación de
            concreto celular con residuos plásticos.
          </p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Participé en el proyecto SENNOVA SGPS-11426-2023 liderando el diseño
            e implementación de un sistema IoT para monitorear variables
            ambientales en cultivos de plantas medicinales
          </p>
        </div>
        <div className="my-2 py-4 border-t border-dashed border-[#B9B28A] font-[VT323] text-xl leading-5">
          <h3>PEACE DEV | Back-End</h3>
          <p className="text-black/40">Septiembre 2022 – Abril 2023</p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Desarrollo de APIs RESTful con Django REST Framework, mejorando la
            eficiencia de las respuestas en un 40% mediante caching con Redis y
            optimización de queries.
          </p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Implementación de un sistema de chat en tiempo real usando Django
            Channels y WebSockets, integrado con autenticación JWT y
            almacenamiento de historial en PostgreSQL.
          </p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Gestión de despliegues en entornos cloud utilizando Docker y Docker
            Compose, garantizando consistencia entre desarrollo, staging y
            producción.
          </p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Almacenamiento seguro de archivos (imágenes, documentos) en AWS S3,
            con políticas de IAM y cifrado AES-256, reduciendo costos de
            almacenamiento en un 25%.
          </p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Optimización de bases de datos PostgreSQL: Configuración de índices,
            particionamiento de tablas y réplicas de lectura, logrando un 99.5%
            de uptime.
          </p>
          <p className="flex gap-2 items-start text-lg leading-6 mt-4">
            <span className="">|</span>
            Colaboración con el equipo frontend (React.js) para integrar APIs
            mediante contratos tipo OpenAPI/Swagger, acelerando el tiempo de
            desarrollo en un 30%.
          </p>
        </div>
      </article>
    </div>
  );
}
