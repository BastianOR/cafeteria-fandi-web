import { MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";
import "./carta-page.css";

export default function CartaPage() {

  const [selectedCategory, setSelectedCategory] = useState("Desayuno");
  const categoryImgDefaultClasses = " border-[#0000004e] group-hover:border-[#eec10de0] ";
  const categoryNameDefaultClasses = " opacity-80 group-hover:opacity-100 ";

  const categories = [
    {
      name: "Desayuno",
      image: "/desayuno.png"
    },
    {
      name: "Sandwich",
      image: "/sandwiches.png"
    },
    {
      name: "Burgers",
      image: "/hamburguesas.png"
    },
    {
      name: "Café/Té",
      image: "/cafete.png"
    },
    {
      name: "Dulces",
      image: "/dulces.png"
    },
    {
      name: "Jugos",
      image: "/jugos.png"
    },
    {
        name: "Frituras",
        image: "/frituras.png"
    },
    {
        name: "Infantil",
        image: "/infantil.png"
    }
  ]

  return (
    <div className="w-full p-3 flex flex-col items-center">
        

      <img src="/cakencoffee.png" alt="" className="w-full h-32 object-cover object-top"/>

      <div className="w-full flex justify-center items-center gap-3 mt-6">
        <MdOutlineHorizontalRule size={24} />
        <h4 className="text-center text-[2.7rem] xs:text-5xl">Nuestra Carta</h4>
        <MdOutlineHorizontalRule size={24} />
      </div>

      <p className="text-center mt-5">Seleccione una categoría para ver nuestros productos.</p>

      <div className="categories-container">
        {categories.map((category) => (
          <button key={category.name} onClick={() => setSelectedCategory(category.name)}
          className="group h-24 w-[5.4rem] flex flex-col items-center gap-1">
            <img src={category.image} alt="" className={ (selectedCategory === category.name ? " border-[#eec10de0] " : categoryImgDefaultClasses) + " h-14 w-14 rounded-full border-[3px] border-solid "}/>
            <h6 className={ (selectedCategory === category.name ? " opacity-100 " : categoryNameDefaultClasses) + " transition-all duration-75 ease-linear text-center "}>{category.name}</h6>
          </button>
        ))}
      </div>


    </div>
  );
}

