import { createElement } from "../createElement";
import {dataNavigation} from "../dataNavigation";

export const renderNavigation = (gender)=>{
    const navigation = document.querySelector('.navigation');

navigation.textContent='';
const container = createElement('div',
    {
        className:'container',
    },
    {
        parent:navigation,
    },
    );

const genderList=createElement('ul',
    {
        className:'navigation__gender gender',
    },
    {
        parent:container,
    },
    );

for(const genderName in dataNavigation){
        createElement('a',
        {
            className:`gender__link ${gender === genderName ? 'gender__link_activ':" "}`,
            href:`#/${genderName}`,
            textContent:dataNavigation[genderName].title,
        },
        {
            parent:createElement('li',
                {
                    className:'gender__item',                
                    parent:genderList,    
                },        
            ),
        }, 
        );
    };

const categoryElems = dataNavigation[gender].list.map((item)=>createElement('li',
    {
        className:'category__item',
    },
    {
        append:createElement('a',
        {
            className:'category__link',
            textContent:item.title,
            href:`#/${gender}/${item.slug}`,
        },
        {  
            cb(elem){
                //console.log('elem:',elem);
                elem.addEventListener('click',()=>document.querySelector('.category__link_activ')?. classList.remove('category__link_activ'),
                elem.classList.add('category__link_activ')
                );
            },
        },
        )
    },
    ));
    
createElement('ul',
    {
        className:'navigation__category category',
    },
    {
        parent:container,
        appends:categoryElems,
    },
)
};
    
                                        /*navigation.innerHTML=
    ` <div class="container">
        <ul class="navigation__gender gender">
            <li class="gender__item">
            <a href="#" class="gender__link gender__link_activ">Женщины</a>
            </li>
            <li class="gender__item">
            <a href="#" class="gender__link">Мужчины</a>
            </li>
        </ul>
        </div>
        
        <div class="navigation__category">
        <ul class="navigation__category category">
            <li class="navigation__item">
            <a href="#" class="category__link__link_activ">Лифчики</a>
            </li>
            <li class="navigation__item">
            <a href="#" class="category__link">Трузера(флаевые, с кокетками на боксайдах)</a>
            </li>
            <li class="navigation__item">
            <a href="#" class="category__link">Носки</a>
            </li>
            <li class="navigation__item">
            <a href="#" class="category__link">Халаты</a>
            </li>
            <li class="navigation__item">
            <a href="#" class="category__link">Рейтузы с начёсом</a>
            </li>
            <li class="navigation__item">
            <a href="#" class="category__link">Пижамы</a>
            </li>
        </ul>
        </div>
    `;*/
createElement