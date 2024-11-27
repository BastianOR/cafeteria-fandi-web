import { Fade } from "react-awesome-reveal";

export default function LocationPage() {
  return (
    <Fade triggerOnce className="w-full flex flex-col items-center">
      <div className="w-full p-7 flex flex-col items-center text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.6444776899125!2d-70.14527162503067!3d-20.232089447786098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9152156abe1b8bc1%3A0xab471732d103512d!2sCafeterita%20Fandi!5e0!3m2!1ses-419!2scl!4v1732746005326!5m2!1ses-419!2scl"
          height="300"
          className="w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <main className="mt-7">
          <h3>Encuéntranos</h3>
          <p className="mt-3">En Mallplaza Iquique, segundo piso, local 298.</p>
          <p>¡De lunes a domingo!</p>
        </main>

        <p className="mt-12">
          ¿Problemas para ver el mapa?{" "}
          <a
            href="https://maps.app.goo.gl/QhQG2xd4M18Kxvig8"
            target="_blank"
            className="underline text-blue-500"
          >
            ¡Click aquí!
          </a>
        </p>

        <img src="lestore.png" alt="" className="w-full h-[200px] mt-7 object-cover object-top" />
      </div>
    </Fade>
  );
}
