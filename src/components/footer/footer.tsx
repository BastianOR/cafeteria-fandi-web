export default function Footer() {
  const year = new Date().getFullYear();
  const developerWebsite = "https://www.linkedin.com/in/bastian-or/";

  return (
    <footer className="w-full mt-7 p-3 bg-[var(--accent)] text-gray-50 flex justify-center">
      <div className="flex flex-col items-center border-[4px] border-[#f0efeb7c] p-5 w-full">


        <img src="/fandilogo.png" alt="" className="h-28" />

        <p className="mt-4 text-center">
          {"© " + year + " Cafetería Fandi"}
        </p>

        <small className="text-center">
          Lunes a domingo en Mallplaza Iquique | Todos los derechos reservados
        </small>

        <small className="text-center mt-2">
          <a
            href="https://www.instagram.com/cafeteriafandi/"
            target="_blank"
            className="mt-2"
          >
            <u>Síguenos en Instagram</u>
          </a>
        </small>


        <small className="opacity-70 mt-4 text-center">
          Web desarrollada por{" "}
          <a target="_blank" href={developerWebsite}>
            Bastian Ossandón Rivera
          </a>
        </small>


      </div>
    </footer>
  );
}
