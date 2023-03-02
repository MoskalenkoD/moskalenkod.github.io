import logo from './logo.svg';
import './styles/bootstrap.min.css';
import './styles/App.css';

function App() {

    function showProfession(e) {
        e.preventDefault();
        let clone = e.currentTarget.cloneNode(true);
        clone.classList.add('modal');
        clone.classList.add('col');
        clone.classList.remove('col-lg-3');
        clone.classList.remove('col-md-6');
        clone.classList.remove('col-sm-12');
        clone.classList.remove('mt-5');
        let shadow = document.createElement('div');
        shadow.classList.add('shadow');
        document.querySelector('.App').append(clone);
        shadow = document.querySelector('.App').append(shadow);

        document.querySelector('.shadow').addEventListener('click', () => {
            let appBlock = document.querySelector('.App');
            appBlock.querySelector('.modal').remove();
            appBlock.querySelector('.shadow').remove();
        });
    }

    return (
        <div className="App">
            <div className="header video-background">
                <img src='./source/background.jpg'/>
                <video autoPlay muted loop>
                    <source src="../source/background.MP4" type="video/mp4"></source>
                </video>
                <h2>Онлайн-курс</h2>
                <h1>Профессия <b>3D artist</b></h1>
                <h4>Получи дистанционную работу в кино и видеоиграх</h4>
            </div>
            <div className="block1 container">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 6 месяцев и новая дистанционная профессия.</p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 7 профильных программ от maya до Unreal Engine.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> Нескучные курсы для тех кто хочет освоить 3D. </p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> Индивидуальное курирование от старта до поиска работы.</p>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col col-12">
                        <h4>Добро пожаловать в 3D вселенную!) От 3D визуализации в играх, кино и архитектуре, до
                            создания блокчейн itemов и воплощения виртуальных миров в мета вселенных.</h4>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-6 m-auto">
                        <h2 className='quest'>Кем ты станешь после курса:</h2>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions1.jpg' title='Image professions1.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Environment Artist</h2>
                        <p className='descriptions'>Создание локаций для игр и фильмов. Ты будешь моделировать миры
                            начиная
                            с детализированных предметов и заканчивая разнообразными масштабными локациями окружающей
                            среды
                            с освещением в них. Это профессия особенно крутая, потому что сейчас многие идут в
                            персонажку,
                            а у 3D environment artist меньше конкуренции и выше оплата.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions2.jpg' title='Image professions2.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Modeler</h2>
                        <p className='descriptions'>Востребованная профессия идеальна для начала карьеры. Ты будешь
                            моделить
                            многое от персонажей до небольших объектов, тебе не всегда надо будет прорабатывать модели
                            детально,
                            часто профессия совмещается с другими 3D профессиями.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions3.png' title='Image professions3.png'/>
                        </div>
                        <h2 className='title mt-2'>3D Interior Artist</h2>
                        <p className='descriptions'>Создание интерьеров домов, квартир, окружения и ассетов,
                            представляющих
                            различные части интерьеров зданий. Будешь создавать полный интерьер от конструкций (стен,
                            окон,
                            комнат) до предметов интерьера (мебель, аксессуары, декор) и других элементов декора.
                            Архитектурные
                            бюро ждут тебя, а может ты мечтал сделать свой идеальный дом?</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions4.jpg' title='Image professions4.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Vehicle Artist</h2>
                        <p className='descriptions'>Создание техники, автомобилей, танков и прочей техники. Все
                            детализировано
                            и красиво. Просто крутая и необходимая профессия в сфере кино и игр.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions5.jpg' title='Image professions5.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Printing Specialist</h2>
                        <p className='descriptions'>Создание 3D моделей для 3D печати. Такие специалисты нужны во всех
                            сферах
                            от архитектуры до медицины и сферы развлечений. Сейчас 3D печать все больше входит в
                            производства
                            почти всех отраслей и такие специалисты очень нужны.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions6.jpg' title='Image professions6.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Props Artist</h2>
                        <p className='descriptions'>Создание маленьких или средних объектов. Изготовление реквизита от
                            украшений
                            до оружия и даже движущихся моделей. Ты будешь работать с различными материалами и
                            текстурами,
                            включая металл, латекс, стекловолокно, дерево и текстиль.
                            Круто если ты любишь работать с деталями. Такой специалист необходим в играх, кино и на
                            разработках
                            моделей на различных производствах.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions7.jpg' title='Image professions7.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Generalist</h2>
                        <p className='descriptions'>Профессия, подходящая для специалистов с небольшим опытом. Роль 3D
                            Generalist варьируется от студии к студии. Однако на большинстве должностей универсалы
                            отвечают
                            за моделирование, оснастку, анимацию, захват движения, рисование и скульптуру. От 3D
                            Generalist
                            не ожидается, что он будет экспертом во всех областях, но ожидается, что он обладает
                            базовыми
                            знаниями в различных нишах.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block">
                            <img src='./source/professions8.png' title='Image professions8.png'/>
                        </div>
                        <h2 className='title mt-2'>3D Conсept Artist</h2>
                        <p className='descriptions'>Ты будешь использовать моделирование для визуализации идей и
                            создания
                            изображений для цифровой среды, персонажей, существ и многих других ресурсов. Часто ты
                            будешь
                            собирать сцены из готовых моделей. В этой профессии важна скорость и творчество умение
                            придумывать
                            идеи и воплощать в жизнь.</p>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-12 m-auto">
                        <h2 className='pay'>Средняя заработная плата: <p>125 000р в России</p> <p>7 000$ по Миру</p>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="block2">
                <div className="spider-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="text col-lg-6 col-md-6 col-sm-12">
                                <p>Ваш педагог:</p>
                                <p>Павел Иваненко.</p>
                                <p>Со стажем в 3D - 12 лет. </p>
                                <p>Опыт преподавания 3D - 5 лет</p>
                            </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="image-block">
                                    <img src='./source/ava.jpg' title='Павел Иваненко фото'/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="block3">

            </div>

            <div className="block7 uk-container">
                <div className="col-12 mt-3">
                    <h2 className="mb-5">Работы учеников: </h2>
                    <div className="uk-child-width-1-2" uk-grid="" uk-lightbox="animation: slide">
                        <div className="uk-first-column">
                            <div className="uk-child-width-1-3" uk-grid="" >
                                <div className="uk-first-column">
                                    <div className="uk-child-width-1-1" uk-grid >
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-child-width-1-1" uk-grid >
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-child-width-1-1" uk-grid >
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/22.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/22.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/23.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/23.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-2" uk-grid="" >
                                <div className="uk-first-column">
                                    <div className="uk-width-1-1 uk-height-small">
                                        <a className="uk-inline" href="./source/slider/31.jpg"
                                           data-caption="Caption 1">
                                            <img src="./source/slider/31.jpg" width="1800" height="1200" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-width-1-1 uk-height-small">
                                        <a className="uk-inline" href="./source/slider/32.jpg"
                                           data-caption="Caption 1">
                                            <img src="./source/slider/32.jpg" width="1800" height="1200" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
