import { createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "tasks",
    initialState: {
        products: [
            {
                id: "1",
                name: "Naciskana rakieta",
                avability: false,
                price: 99.99,
                online: true,
                description: " Przeważnie rakiety to wielkie maszyny, które mają lecieć na duże wysokości. Jednak mało kto może schować ją w domu lub ogrodzie, dlatego przygotowaliśmy bardzo małą rakietę, zdolną pomieścić się w dłoni. W dodatku jej lot nie wymaga paliwa czy ognia, lecz zwykłego naciśnięcia!",
                category: 2,
            },
            {
                id: "2",
                name: "Samolot z napędem na gumkę",
                avability: false,
                price: 99.99,
                online: true,
                description: "Puszczanie samolotów to ciekawa umiejętność, wręcz sztuka. Niestety nie każdy potrafi robić to bardzo dobrze, w związku z tym nasz produkt jest gotowy do użytkowania nawet bez tej umiejętności. Napęd pozwoli ci wystrzelić samolot dalej niż robią to mistrzowie rzucania.",
                category: 1,
            },
            {
                id: "3",
                name: "Gibiący się model na sprężynce",
                avability: false,
                price: 99.99,
                online: true,
                description: "Jeżeli twój pokój czy biurko w pracy wydają się nieciekawe, to nasz model jest dla ciebie! Większość ozdób nie ma żadnej przydatności, ale ta jest idealna na nudę. Choć pozornie bez zastosowania, możesz użyć ją na wiele sposobów. ",
                category: 1,
            },
            {
                id: "4",
                name: "Samolot z napędem elektrycznym",
                avability: false,
                price: 99.99,
                online: true,
                description: "Samoloty ze śmigłem to dla nas często stare maszyny, które nie są już używane. Jednak dlaczego nie sięgnąć w głąb historii i samemu poznać tę technologię? Możesz wykorzystać samolot wiele razy, gdyż napęd działa na akumulator. ",
                category: 4,
                
            },
            {
                id: "5",
                name: "Ciasteczka maślane w różnych kształtach",
                avability: false,
                price: 99.99,
                online: false,
                description: "Może lubisz słodkości, albo interesujesz się kosmosem, jeżeli tak jest, to musisz spróbować naszych ciasteczek! Mają różne kształty tak aby każdy mógł wybrać swoje ulubione.",
                category: 3,
                
            },
            {
                id: "6",
                name: "Zestaw do tworzenia rakiet",
                avability: false,
                price: 99.99,
                online: true,
                description: "Żeby zbudować rakietę nie zawsze potrzebne jest doświadczenie i rozległa wiedza, nasz zestaw pozwoli ci stworzyć własną, wyjątkową rakietę i wystrzelić ją w przetrzeń. ",
                category: 2,
                
            },
            {
                id: "7",
                name: "Powietrzna rakieta z pianki",
                avability: false,
                price: 99.99,
                online: true,
                description: "Ciśnienie jest wykorzystywane w mnóstwach technik i dziedzin, my używamy go jako napędu do rakiety. Różne zestawy zawierają punkty startowe, piankowe rakiety, ulepszenia i dodatki. Wszystko to zasilane ciśnieniem!",
                category: 2,
                
            },
            {
                id: "8",
                name: "Lampion",
                avability: false,
                price: 99.99,
                online: true,
                description: "Choć balony na gorące powietrze są dosyć duże, to można skorzystać z pomniejszonej wersji. Lampiony mogą służyć robieniu wspaniałych zdjęć z powietrza, albo jako ozdoba nocnego nieba. Jak ty wykorzystasz to urządzenie?",
                category: 4,
                
            },
            {
                id: "9",
                name: "Rakietowa lampka",
                avability: false,
                price: 99.99,
                online: true,
                description: "Wszystko można kształtować, dlatego stworzyliśmy rakietową lampkę, która może być ozdobą, lub służyć jako oświetlenie w ciemnych miejscach. Do tego możesz ukryć ją niemal wszędzie, gdyż jest bardzo mała!",
                category: 2,
                
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