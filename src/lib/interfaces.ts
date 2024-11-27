export interface ICategories {
    name: string;
    image: string;
    desayuno?: string;
    once?: string;
    menu: {
        food: string;
        description: string;
        price: number[] | string;
    }[];
}