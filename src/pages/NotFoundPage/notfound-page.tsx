import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Fade triggerOnce>
      <div className="w-full text-center p-7 flex flex-col items-center">
        <img src="/404.png" alt="" className="w-[300px] mt-3 opacity-20" />
        <span className="text-4xl font-semibold mt-7">Página no encontrada</span>
        <p className="mt-4">
          La ruta a la que intenta acceder no existe. Compruebe que no esté mal
          escrita o inténtelo más tarde.
          <br />
          También puede volver a la página de inicio{" "}
          <NavLink to="/" className={"underline text-blue-500"}>
            pinchando aquí
          </NavLink>
          .
        </p>
      </div>
    </Fade>
  );
}
