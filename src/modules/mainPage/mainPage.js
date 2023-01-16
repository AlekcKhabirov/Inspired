import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";
import { renderHero } from "../render/renderHero";

export const mainPage = (gender) =>{
    console.log('gender:', gender);
    renderNavigation();
    renderHero();
    renderProducts();
};


