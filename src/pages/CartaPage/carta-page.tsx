/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";
import { formatClpPrice } from "../../lib/bodev-utils";
import { categories } from "../../lib/restaurant-menu";
import { ICategories } from "../../lib/interfaces";
import "./carta-page.css";

/* Main page rendered by the route "/carta" */
export default function CartaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Desayuno");
  const categoryImgDefaultClasses = " border-[#0000004e] group-hover:border-[#eec10de0] ";
  const categoryNameDefaultClasses = " opacity-80 group-hover:opacity-100 ";

  return (
    <section className="w-full p-3 flex flex-col items-center">

      {/* Header image of the page */}
      <img src="/cakencoffee.png" alt="" className="w-full h-32 object-cover object-top" />

      {/* Title of the page */}
      <div className="w-full flex justify-center items-center gap-3 mt-6">
        <MdOutlineHorizontalRule size={24} />
        <h4 className="text-center text-[2.7rem] xs:text-5xl">Nuestra Carta</h4>
        <MdOutlineHorizontalRule size={24} />
      </div>

      {/* Basic instructions on how to maneuver through the page */}
      <p className="text-center mt-5">
        Seleccione una categoría para ver nuestros productos.
      </p>


      {/* The categories container. For each category, a button is rendered. And each button 
      contains an image and a category name. Furthermore, the selected category changes from default classes 
      to highlighting classes. */}
      <div className="categories-container">
        {categories.map((category) => (

          <button key={category.name} onClick={() => setSelectedCategory(category.name)} 
          className="group h-24 w-[5.4rem] flex flex-col items-center gap-1">

            <img src={category.image} alt="" 
            className={
                (selectedCategory === category.name
                  ? " border-[#eec10de0] "
                  : categoryImgDefaultClasses) +
                " h-14 w-14 rounded-full border-[3px] border-solid "
              }
            />

            <h6
              className={
                (selectedCategory === category.name
                  ? " opacity-100 "
                  : categoryNameDefaultClasses) +
                " transition-all duration-75 ease-linear text-center "
              }
            >
              {category.name}
            </h6>
          </button>
        ))}
      </div>

      {/* The main content of the page, where menu items are displayed */}
      <div className="border-2 border-zinc-300 border-solid px-4 py-7 w-full my-10">

        {/* This section renders BreakfastInfo when the selected category is "Desayuno".
        It finds out what the index of the category of name "Desayuno" is, before retrieving it's data as 
        values for the props of the BreakfastInfo component. */}
        {selectedCategory === "Desayuno" && (
          <BreakfastInfo
            breakfastTime={
              categories[
                categories.findIndex((category) => category.name === "Desayuno")
              ].desayuno
            }
            teaTime={
              categories[
                categories.findIndex((category) => category.name === "Desayuno")
              ].once
            }
          />
        )}

        {/* This section renders menu items for the selected category */}
        <main className="flex flex-col gap-6">
          {renderMenuItemsForSelectedCategory({
            categories,
            selectedCategory
          })}
        </main>


      </div>
    </section>
  );
}



/* Component that only renders when the selected category is "Desayuno", and indicates 
the schedule of what's considered breakfast time and tea time. */
function BreakfastInfo({ breakfastTime, teaTime,}: { breakfastTime: string | undefined; teaTime: string | undefined; }) {
  return (
    <h6 className="text-center pb-7 mb-7 border-b border-zinc-300 border-solid">
      <b className="block text-lg opacity-70">Horarios desayuno / once</b>
      <span className="block text-sm mt-1">
        {breakfastTime || "10:30 - 12:30" + " / " + teaTime || "18:30 - 20:00"}
      </span>
    </h6>
  );
}



/* Component that renders for each singular item in the menu of a category */
function MenuItem({ food, description, price } : {  food: string; description: string; price: Array<number>; }) {
  return (
    <div className="singular-item">
      <div className="w-full sm:w-[80%]">
        <ul className="list-disc list-inside font-bold">
          <li>{food + ""}</li>
        </ul>
        <span className="opacity-80">
          {description + ""}
        </span>
      </div>
      <div className="w-full sm:w-[20%] text-left sm:text-right">
        { price.length === 1 ? <span>{formatClpPrice(price[0])}</span> : <span>{ formatClpPrice(price[0]) + " / " + formatClpPrice(price[1])}</span>}
      </div>
    </div>
  );
}



/* Component that loops through a category's menu data and renders MenuItem components in iterations.
Also in charge of informing the user If there's no menu items on the selected category. */
function renderMenuItemsForSelectedCategory ({ categories, selectedCategory } : { categories: Array<ICategories>; selectedCategory: string; }) {

  const categoryData = categories.find((category:any) => category.name === selectedCategory);
  const categoryMenu = categoryData?.menu;
  /* Map the categoryMenu array to render MenuItem components with prop values given by the menu item: */
  return (
    <div className="flex flex-col gap-6">
      { categoryMenu ? categoryMenu.map((menuItem: any) => (
        <MenuItem
          key={menuItem.food + ""}
          food={menuItem.food + ""}
          description={menuItem.description + ""}
          price={menuItem.price}
        />
      )) : (
        <p className="text-center">No hay productos disponibles en esta categoría</p>
      )}
    </div>
  );

}