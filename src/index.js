import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import {renderHeader} from './modules/render/renderHeader';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';


router.on('*',()=>{
    renderHeader();
    renderFooter();
});

router.on('/',()=>{
   /* console.warn(1111);*/
    mainPage();
});
router.on('women',()=>{
    womenMainPage();
});

router.on('men',()=>{
    menMainPage();
});

setTimeout(()=>{
    router.navigate('men');console.warn(1111);
},3000);

setTimeout(()=>{
    router.navigate('women');
},6000);/**/

router.resolve();/*запустил роутер*/






/*import code from './img/code.png'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));*/