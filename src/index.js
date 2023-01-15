import './index.html';
import './index.scss';
import { renderFooter } from './modules/render/renderFooter';
import {renderHeader} from './modules/render/renderHeader';
import { mainPage } from './modules/mainPage/mainPage';

renderHeader();
renderFooter();
mainPage();



/*import code from './img/code.png'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));*/