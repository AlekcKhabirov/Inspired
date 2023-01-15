export const renderNavigation = ()=>{
    const navigation = document.querySelector('.navigation');
    navigation.innerHTML=`
        <div class="container">
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
    `;
}