import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";
import { renderHero } from "../render/renderHero";

export const mainPage = (gender='women') =>{
    console.log('gender:', gender);
    renderNavigation(gender);
    renderHero(gender);
    renderProducts();
};


