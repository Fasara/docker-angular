export const Dishes: any = [

    {
        id: 1,
        description: "Carbonara pasta",
        imgUrl: "https://unsplash.com/photos/P6tfi3IoqNw",
        ingredients: "guanciale, eggs, pasta, black pepper, parmesan",
        cookingTime: "15 min.",
        category: "main course"
    },

    {
        id: 2,
        description: "Lasagna",
        imgUrl: "https://unsplash.com/photos/P6tfi3IoqNw",
        ingredients: "Bolognese sauce, besciamella, cheese, lasagna sheets",
        cookingTime: "40 min.",
        category: "main course"
    },

    {
        id: 3,
        description: "Roasted chicken with potatoes",
        imgUrl: "https://unsplash.com/photos/P6tfi3IoqNw",
        ingredients: "Chicken, potatoes, rosemary",
        cookingTime: "35 min.",
        category: "main course"
    },

    {
        id: 4,
        description: "Bruschetta",
        imgUrl: "https://unsplash.com/photos/P6tfi3IoqNw",
        ingredients: "bread, fresh tomatoes",
        cookingTime: "10 min.",
        category: "starter"
    },

    {
        id: 5,
        description: "Tiramisú",
        imgUrl: "https://unsplash.com/photos/P6tfi3IoqNw",
        ingredients: "Mascarpone cheese, biscuits, cacao",
        cookingTime: "10 min.",
        category: "dessert"
    }


];

export function findRecipes(dishId:number) {
    return Dishes.find(dish=> dish.id == dishId);
}
