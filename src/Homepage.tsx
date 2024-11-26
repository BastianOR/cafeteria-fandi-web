import { MdOutlineHorizontalRule } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";

export default function Homepage() {
  return (
    <Fade triggerOnce className="w-full">
      <Hero />
      <Schedule />
      <Playground />
      <Socials />
    </Fade>
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
        <NavLink to={"/carta"} className="btn-primary mb-11 mt-7">
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
    <main className="container mx-auto p-4">
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
    </main>
  );
};

function Socials() {
  return (
    <section className="w-full bg-black text-white px-7 py-12 flex flex-col items-center md:flex-row md:justify-between">
      <div className="w-full flex flex-col md:flex-row md:gap-10">
        <div className="grid grid-cols-2 gap-4 mb-7 md:mb-0 w-full md:w-1/2">
          <img src="igphotos/cheers.png" alt="Salud con mocachinos" className="w-full h-40 object-cover" />
          <img src="igphotos/childgames.png" alt="Jugando en el patio de juegos privado" className="w-full h-40 object-cover" />
          <img src="igphotos/happycustomer.png" alt="Cliente satisfecho con un regalo" className="w-full h-40 object-cover" />
          <img src="igphotos/thesquad.png" alt="El staff de la cafetería fandi" className="w-full h-40 object-cover" />
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
    </section>
  );
}

function Playground() {
  return (
    <section className="w-full border-b border-[#ffffff6f] bg-black text-white px-7 py-12 gap-5 flex flex-col items-center sm:flex-row sm:justify-between">
      <main className="w-full sm:w-[60%] sm:h-[450px] sm:flex sm:flex-col sm:justify-start">
        <h3 className="mb-3">Juegos Infantiles</h3>
        <MdOutlineHorizontalRule size={24} />
        <p className="mt-6">
        ¡Contamos con una sección privada de juego para los pequeños!
          <ul className="list-disc list-inside mt-3">
            <li className="mt-2">Gratis por 20 minutos por consumo sobre $5.000</li>
            <li className="mt-2">Se puede extender el tiempo por un precio adicional.</li>
            <li className="mt-2">La altura máxima es de 130cm. No insista.</li>
            <li className="mt-2">Los niños deben estar bajo supervisión de sus padres en todo momento.</li>
          </ul>
        </p>
      </main>
      <div className="w-full flex justify-center sm:w-[40%] md:[30%]">
        <img src="/fotojuegos.png" alt="" className="h-[200px] w-full sm:h-[450px] object-cover object-center" />
      </div>
    </section>
  );
}
