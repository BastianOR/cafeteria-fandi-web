import { MdOutlineHorizontalRule } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Schedule />
      <Socials />
    </>
  );
}

function Hero() {
  return (
    <section className="p-3 w-full border-b border-gray-400">
      <img
        src="/heroimg.png"
        alt="Welcome"
        className="h-52 w-full object-cover object-top"
      />
      <main className="flex flex-col items-center">
        
        <h1 className="w-full text-center mt-12">Cafetería Fandi</h1>

        <div className="w-full flex justify-center items-center gap-2">
          <MdOutlineHorizontalRule />
          <h3>Bienvenid@</h3>
          <MdOutlineHorizontalRule />
        </div>

        <div className="flex gap-2 items-end mt-7">
          <img
            src="/retrolineleft.png"
            alt=""
            className="opacity-20 w-[108px] mb-1"
          />
          <img src="/coffee1.png" alt="" className="opacity-40 h-11" />
          <img
            src="/retrolineright.png"
            alt=""
            className="opacity-20 w-[108px] mb-1"
          />
        </div>
        <p className="text-center mt-6">
          Somos una cafetería con productos de calidad para toda la familia.
          <br />
          Todos los días en Mallplaza Iquique, Piso 2, Local 298.
        </p>
        <NavLink to={"/menu"} className="btn-primary mb-11 mt-7">
          Ver la Carta
        </NavLink>
      </main>
    </section>
  );
}

function Schedule() {
  return (
    <section className="p-3 w-full flex flex-col items-center mb-9 mt-7">
      <div className="w-full flex justify-center items-center gap-2 mb-7">
        <MdOutlineHorizontalRule />
        <h3>Horario de Atención</h3>
        <MdOutlineHorizontalRule />
      </div>
      <ScheduleTable />
    </section>
  );
}

const ScheduleTable = () => {
  const schedule = [
    { day: "Lunes a Jueves", activities: "10:30 - 20:30" },
    { day: "Viernes y Sábado", activities: "10:30 - 21:00" },
    { day: "Domingo", activities: "11:00 - 20:00" },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-[var(--secondary)] text-[#0000009e] uppercase text-sm leading-normal">
            <th className="py-3 px-2 sm:px-6 text-left">Días</th>
            <th className="py-3 px-2 sm:px-6 text-left">Horario</th>
          </tr>
        </thead>
        <tbody className="text-black text-sm font-light">
          {schedule.map((item) => (
            <tr
              key={item.day}
              className="border-b border-gray-200 hover:bg-[#c3c3b521] transition-colors duration-75 ease-linear"
            >
              <td className="py-3 px-2 sm:px-6">{item.day}</td>
              <td className="py-3 px-2 sm:px-6">{item.activities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Socials() {
  return (
    <div className="w-full bg-black text-white p-7 flex flex-col items-center md:flex-row md:justify-between">
      <div className="w-full flex flex-col md:flex-row md:gap-10">
        <div className="grid grid-cols-2 gap-4 mb-7 md:mb-0 w-full md:w-1/2">
          <img src="image1.jpg" alt="Image 1" className="w-full h-40 bg-[#fbafaf]" />
          <img src="image2.jpg" alt="Image 2" className="w-full h-40 bg-[#fbafaf]" />
          <img src="image3.jpg" alt="Image 3" className="w-full h-40 bg-[#fbafaf]" />
          <img src="image4.jpg" alt="Image 4" className="w-full h-40 bg-[#fbafaf]" />
        </div>

        <main className="flex flex-col items-center text-center md:items-start md:text-start md:ml-2 w-full md:w-1/2 mb-1">
          <h3 className="mb-3">Únete a nuestra Comunidad</h3>
          <MdOutlineHorizontalRule size={24} />
          <p className="mt-6">
            Para estar al tanto de nuevos productos, promociones e información, 
            puedes seguirnos en redes sociales.<br />
            ¡ Tus comentarios son bienvenidos !
          </p>
          <a href="https://www.instagram.com/cafeteriafandi/" target="_blank" className="flex items-center gap-1 mt-7"><PiInstagramLogoFill size={24} color="var(--accent)" /> <u>@cafeteriafandi</u></a>
        </main>
      </div>
    </div>
  );
}
