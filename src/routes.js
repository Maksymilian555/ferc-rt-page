export const toShop = () => "/Shop";

export const toMainPage = () => "/MainPage";

export const toGallery = () => "/Gallery";

export const toProduct = ({id} = {id: ":id"}) => `/Product/${id}`;

export const toNews = ({id} = {id: ":id"}) => `/News/${id}`;