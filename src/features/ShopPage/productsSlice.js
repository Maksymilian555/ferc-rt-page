import { createSlice, nanoid } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "tasks",
    initialState: {
        products: [
            {
                id: nanoid(),
                name: "Rakieta na gumkę",
                avability: true,
                price: 100.50,
                online: false,
                description: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet ",
                category: 1,
            },
            {
                id: nanoid(),
                name: "uoo",
                avability: true,
                price: 10.50,
                online: true,
                description: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet ",
                category: 2,
            },
            {
                id: nanoid(),
                name: "elele",
                avability: false,
                price: 80.50,
                online: true,
                description: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet ",
                category: 3,
            },
            {
                id: nanoid(),
                name: "weo",
                avability: true,
                price: 190.50,
                online: true,
                description: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet ",
                category: 4,
            },
        ],
    },
    reducers: {

    },
});

const selectProductsState = state => state.products;

export const selectProducts = state => selectProductsState(state).products;

export default productsSlice.reducer;   

export const getProductsById = (state, productId) =>
    selectProducts(state).find(({ id }) => id === productId);

export const selectProductsByQuery = (state, query) => {
    const products = selectProducts(state)
    if (!query || query.trim() === "") {
        return null;
    }

    return products.filter(({name}) => name.includes(query.trim()));
}
export const getProductsByCategory = (state, usedCategory) =>
    selectProducts(state).filter(({category}) => category === usedCategory);