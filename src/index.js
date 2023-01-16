import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import {renderHeader} from './modules/render/renderHeader';
import { womanMainPage } from './modules/mainPage/womanMainPage';
import { manMainPage } from './modules/mainPage/manMainPage';


router.on('*',()=>{
    renderHeader();
    renderFooter();
});

router.on('/',()=>{
    console.warn(1111);
    mainPage();
});
router.on('woman',()=>{
    womanMainPage();
});

router.on('man',()=>{
    manMainPage();
});

setTimeout(()=>{
    router.navigate('man');
},3000);

setTimeout(()=>{
    router.navigate('woman');
},6000);

router.resolve();






/*import code from './img/code.png'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));*/