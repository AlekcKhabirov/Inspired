import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";
import { renderHero } from "../render/renderHero";

export const mainPage = () =>{
    renderNavigation();
    renderHero();
    renderProducts();
};

