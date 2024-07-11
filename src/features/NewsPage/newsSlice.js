import { createSlice} from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [
            {
                id: "1",
                name: "FERC rozpoczyna swoją działalność",
                text: "SomeText"
            },
            {
                id: "2",
                name: "Więcej zdjęć na stronie",
                text: "SomeText"
            },
            {
                id: "3",
                name: "Znika link do discord",
                text: "SomeText"
            },
            {
                id: "4",
                name: "Czy strona internetowa przyniesie korzyści firmie?",
                text: "SomeText"
            },
        ],
    },
    reducers: {

    },
});

const selectNewsState = state => state.news;

export const selectNews = state => selectNewsState(state).news;

export default newsSlice.reducer;   

export const getNewsById = (state, newsId) =>
    selectNews(state).find(({ id }) => id === newsId);

export const selectNewsByQuery = (state, query) => {
    const news = selectNews(state)
    if (!query || query.trim() === "") {
        return null;
    }

    return news.filter(({name}) => name.includes(query.trim()));
}
