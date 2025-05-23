export default function Presentation() {
  return (
    <article className="py-4 mx-4 border-b-1 border-dashed border-[#B9B28A]">
      <div className="mb-4 flex gap-3 items-center">
        <figure className="relative rounded-full">
          <img
            className="rounded-full w-20 h-20"
            src="/public/mi-imagen.png"
            alt="Mi imagen"
          />
        </figure>
        <div className="flex-auto">
          <h2 className="text-2xl font-bold font-[Rajdhani]">Jhofran B.</h2>
          <p className="text-sm text-black/50 font-bold font-[VT323]">
            FullStack | <br />
            9:00 AM - 6:00 PM (UTC -5)
          </p>
        </div>
      </div>
      <p className="mb-4 text-black/60 text-lg leading-5 font-[VT323]">
        La programación es mi magia: donde los límites desaparecen y todo es
        posible. Creo que, con tiempo y trabajo en equipo, no hay código que no
        podamos conquistar.
      </p>
      <button className="cursor-pointer text-[#FF9F00] font-[VT323] font-semibold hover:text-[#ffd900]">
        Trabajemos Juntos
      </button>
    </article>
  );
}
