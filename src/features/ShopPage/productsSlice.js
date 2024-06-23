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
                description: " Myślałeś kiedyś, że rakiety to olbrzymie i zaawansowane konstrukcje, w dodatku niebezpieczne i zionące ogniem? Nasza rakieta jest zupełnie inna, wciśnij ją i patrz jak leci! ",
                category: 2,
            },
            {
                id: "2",
                name: "Samolot z napędem gumowym",
                avability: false,
                price: 99.99,
                online: true,
                description: "Zwykła poroca to często za mało, a papierowy samolot nie poleci za daleko. Mamy pomysł jak to naparić! Nasz model samolotu poleci daleko i użyjesz go wiele razy!",
                category: 1,
            },
            {
                id: "3",
                name: "Gibiący się model na sprężynce",
                avability: false,
                price: 99.99,
                online: true,
                description: "Szukasz fajnej ozdoby na biurko, a może czegoś na nudę? Co prawda modele są nieruchome, ale odpowiednia podstawka zmienia zadasy gry, sprawdź jak bardzo można go wygiąć! ",
                category: 1,
            },
            {
                id: "4",
                name: "Samolot z napędem elektrycznym",
                avability: false,
                price: 99.99,
                online: true,
                description: "Szybowce i papierowe samolociki są bardzo fajne, ale daleko im od tych dużo większych maszyn z panelem sterującym i całą tą elektroniką. A co powiesz na samolot ze śmigłami, który możesz naładować?",
                category: 4,
                
            },
            {
                id: "5",
                name: "Ciasteczka maślane w różnych kształtach",
                avability: false,
                price: 99.99,
                online: false,
                description: "Zwykłe ciastka są smaczne, fajne i... bezkształtne, trudno cokolwiek sobie z nich wyobrazić. Zatem może potrzebują trochę koloru i kształtu? Ciekawsza płaska ziemia, rakieta czy ciemny, bezkształtny kosmos?",
                category: 3,
                
            },
            {
                id: "6",
                name: "Zestaw do tworzenia rakiet",
                avability: false,
                price: 99.99,
                online: true,
                description: "Chociaż każda rakieta jest ciekawa i ma ogormne możliwości, to nie każdy może taką zbudować. Co powiesz na małą pomoc? ",
                category: 2,
                
            },
            {
                id: "7",
                name: "Powietrzna rakieta z pianki",
                avability: false,
                price: 99.99,
                online: true,
                description: "Czy korzystaliście kiedyś z pustej butelki do straszenia innych? Ciśnienie można wykorzystac na różny sposób, nawet w rakietach! W tej wersji nasz pojazd startuje za pomocą specjalnego systemu, a następnie bezpieczna, piankowa rakieta leci w przestrzeń!",
                category: 2,
                
            },
            {
                id: "8",
                name: "Lampion",
                avability: false,
                price: 99.99,
                online: true,
                description: "Jeśli jest sucho i nie ma wiatru, to wspaniała pora żeby zobaczyć nocne widowisko. Lampion w dzień wydaje się być malym balonem na gorące powietrze. W nocy daje niesamowite efekty!",
                category: 4,
                
            },
            {
                id: "9",
                name: "Rakietowa lampka",
                avability: false,
                price: 99.99,
                online: true,
                description: "Każda ozdoba sama w sobie wydaje się dość nudna, dlatego warto sprawić, żeby pozornie nieużyteczna rzecz, była przydatna w każdej porze. Czy rakietowa lampka to dobra propozycja?",
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