import { ICategories } from "./interfaces";
export const categories: ICategories[] = [
  {
    name: "Desayuno",
    image: "/menubtns/desayuno.png",
    desayuno: "10:30 - 12:30",
    once: "18:30 - 20:00",
    menu: [
      {
        food: "Desayuno Italiano",
        description:
          "Pan a elección con jamón y palta. Precio extra si agrega café, té o jugo de 350ml.",
        price: [5240, 7300],
      },
      {
        food: "Tostadas Simples",
        description: "Mantequilla con mermelada. Precio extra si agrega café, té o jugo de 350ml.",
        price: [4190, 5990],
      },
      {
        food: "Tostadas",
        description: "Con 2 agregados. Precio extra si agrega café, té o jugo de 350ml.",
        price: [4790, 7290],
      },
      {
        food: "Fajitas",
        description: "Con 2 agregados. Precio extra si agrega café, té o jugo de 350ml.",
        price: [4190, 5990],
      },
      {
        food: "Tostadas Huevos Revueltos",
        description: "Incluyen té o café americano.",
        price: [5990],
      },
      {
        food: "Tostadas Huevos Palta",
        description: "Incluyen té o café americano.",
        price: [6990],
      },
      {
        food: "Tostadas Huevos Tocino",
        description: "Incluyen té o café americano.",
        price: [6990],
      },
      {
        food: "Agregados",
        description: "Huevos, palta, jamón o queso.",
        price: "-",
      },
      {
        food: "Panes",
        description: "Ciabatta, molde.",
        price: "-",
      },
    ],
  },
  {
    name: "Sandwich",
    image: "/menubtns/sandwiches.png",
    menu: [
      {
        food: "Churrasco Fandi",
        description: "Churrasco, repollo y cebolla salteada, pimiento, lechuga y salsa de la casa.",
        price: [7190],
      },
      {
        food: "Churrasco Tradicional",
        description: "Churrasco, tomate, lechuga, palta y mayo.",
        price: [7190],
      },
      {
        food: "Naturista",
        description: "Atún con mayo, lechuga, tomate y morrón.",
        price: [7190],
      },
      {
        food: "Barro Luco",
        description: "Churrasco y queso.",
        price: [7190],
      },
      {
        food: "Ave Mayo",
        description: "Ave mayo con lechuga.",
        price: [6190],
      },
      {
        food: "Mechada Luco Italiano",
        description: "Carne mechada, queso, tomate, lechuga, salsa.",
        price: [7690],
      },
      {
        food: "Fandi Mechada",
        description: "Carne mechada, aro de cebolla, queso chedar, lechuga y salsa.",
        price: [7690],
      },
      {
        food: "Sandwich Queso",
        description: "",
        price: [4790],
      },
      {
        food: "Sandwich Jamón y Queso",
        description: "",
        price: [5190],
      },
      {
        food: "Sandwich Jamón Huevo",
        description: "",
        price: [5190],
      },
      {
        food: "Sandwich Jamón Palta",
        description: "",
        price: [5390],
      },
      {
        food: "Sandwich Club",
        description: "Pan molde, ave mayo, huevo, tomate, lechuga, jamón y queso.",
        price: [6290],
      },
    ],
  },
  {
    name: "Burgers",
    image: "/menubtns/hamburguesas.png",
    menu: [
      {
        food: "Americana",
        description:
          "Churrasco, huevo, queso, jamón, tomate y mayo.",
        price: [7390],
      },
      {
        food: "Vacuno",
        description: "Carne de vacuno, huevo, queso, jamón, tomate y lechuga.",
        price: [7390],
      },
      {
        food: "Vegana",
        description: "Proteina vegana, cebolla y repollo salteado, papas al hilo, lechuga y pepinillos.",
        price: [7390],
      },
      {
        food: "Chicken Fandi",
        description: "Truto de pollo, palta, tomate, lechuga y mayo.",
        price: [8390],
      },
      {
        food: "Big Fandi",
        description: "Vacuno, queso, pepinillos, lechuga, tomate y salsa mac.",
        price: [9490],
      },
      {
        food: "Big Ranch de la Casa",
        description: "Vacuno, tocino, queso, papas al hilo, lechuga, salsa barbacoa y mayo.",
        price: [9490],
      },
    ],
  },
  {
    name: "Café/Té",
    image: "/menubtns/cafete.png",
    menu: [
      {
        food: "Espresso Doble / Simple",
        description:
          "Café de grano.",
        price: [2690],
      },
      {
        food: "Café Americano",
        description: "Café de grano diluido con agua caliente.",
        price: [2890],
      },
      {
        food: "Café Cortado",
        description: "Espresso con una porción de leche para cortar su intensidad.",
        price: [3190],
      },
      {
        food: "Café Latte",
        description: "Espresso con leche vaporizada y una capa de espuma.",
        price: [3190],
      },
      {
        food: "Café Flat White",
        description: "Espresso con leche vaporizada sin espuma y más cremoso.",
        price: [3190],
      },
      {
        food: "Machiato Caramelo",
        description: "Espresso con un toque de leche vaporizada y jarabe de caramelo.",
        price: [3390],
      },
      {
        food: "Café Moka",
        description: "Mezcla de espresso, leche y chocolate.",
        price: [3390],
      },
      {
        food: "Café Capuccino",
        description: "Mezcla equilibrada de espresso, leche vaporizada y crema/espuma.",
        price: [3390],
      },
      {
        food: "Café Americano Frío (600ml)",
        description: "Espresso diluido en agua, servido en frío.",
        price: [3590],
      },
      {
        food: "Café Latte Frío (600ml)",
        description: "Espresso con leche vaporizada y espuma, servido frío.",
        price: [5490],
      },
      {
        food: "Café Moka Frío (600ml)",
        description: "Espresso con leche y chocolate, servido frío.",
        price: [5790],
      },
      {
        food: "Caramelo Machiato Frío (600ml)",
        description: "Espresso con leche vaporizada y jarabe de caramelo, servido frío.",
        price: [5790],
      },
      {
        food: "Café con Helado (600ml)",
        description: "Espresso con helado a elección y crema.",
        price: [6890],
      },
      {
        food: "Chocold Frío (600ml)",
        description: "Leche con chocolate, servido frío.",
        price: [6890],
      },
      {
        food: "Té Ceylan",
        description: "",
        price: [2690],
      },
      {
        food: "Té Ceylan con Leche",
        description: "",
        price: [3360],
      },
      {
        food: "Tetera de Té en Hoja (1 o 2 personas)",
        description: "",
        price: [4790, 6290],
      },
      {
        food: "Té Multifruta Frío (600ml)",
        description: "",
        price: [6290],
      },
    ],
  },
  {
    name: "Dulces",
    image: "/menubtns/dulces.png",
    menu: [
      {
        food: "Tortas del Día",
        description:
          "Porción de torta dependiendo de las que estén disponibles.",
        price: [4790],
      },
      {
        food: "Copa de Helado",
        description:
          "Copa de helado a elección.",
        price: [4890],
      },
      {
        food: "Medialuna Manjar",
        description:
          "Deliciosa medialuna con agregado de manjar.",
        price: [4790],
      },
    ],
  },
  {
    name: "Jugos",
    image: "/menubtns/jugos.png",
    menu: [
      {
        food: "Milkshake",
        description:
          "Milkshake sabor a elección acorde a disponibilidad.",
        price: [6200],
      },
      {
        food: "Limonada",
        description:
          "Deliciosa limonada natural.",
        price: [4790],
      },
      {
        food: "Jugos del Día",
        description:
          "Vaso de jugo a elección según disponibilidad.",
        price: [5290],
      },
      {
        food: "Jugos del Día con Leche",
        description:
          "Jugo al día mezclado de manera perfecta con leche.",
        price: [6890],
      },
      {
        food: "Jugo Fandi",
        description:
          "",
        price: [6990],
      },
      {
        food: "Bebidas gaseosas",
        description:
          "Gaseosa a elección según disponibilidad.",
        price: [2390],
      },
      {
        food: "Agua con o sin Gas",
        description:
          "",
        price: [2390],
      },
    ],
  },
  {
    name: "Frituras",
    image: "/menubtns/frituras.png",
    menu: [
      {
        food: "Papas Fandi",
        description:
          "",
        price: [7340],
      },
      {
        food: "Porción de Papas",
        description:
          "Porció de papas fritas caseras.",
        price: [5240],
      },
      {
        food: "Porción de Nuggets",
        description:
          "Porción de nuggets fritos de pollo.",
        price: [5240],
      },
      {
        food: "Salchipapas",
        description:
          "Papas fritas caseras con salchichas.",
        price: [7340],
      },
      {
        food: "Papas con Nuggets",
        description:
          "Combinación de papas fritas caseras con nuggets de pollo.",
        price: [7340],
      },
      {
        food: "Chicharrón de Pollo",
        description:
          "Crujientes trozos de pollo marinado, empanizado y frito.",
        price: [7340],
      },
      {
        food: "Trilogía de Empanadas",
        description:
          "Tres empanadas de queso, tres de pollo y tres de jamón queso en un único plato.",
        price: [7340],
      },
    ],
  },
  {
    name: "Infantil",
    image: "/menubtns/infantil.png",
    menu: [
      {
        food: "Combo Niño",
        description:
          "Salchitacos, papas fritas caseras, nuggets de pollo y jugo natural de 350ml.",
        price: [8390],
      },
      {
        food: "20 Minutos -Extra- de Juegos Infantiles",
        description: "Área de juegos gratis por 20 minutos por consumo. Se puede añadir 20 minutos más por este precio.",
        price: [4000],
      },
    ],
  },
];
