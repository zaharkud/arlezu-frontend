import style from "./AboutPage.module.scss";
import { Header } from "components/index";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.aboutImg}>
          <img src="./img/deco-images/13.png" />
        </div>
        <div className={style.aboutText}>
          <div className={style.textBlock}>
            <h1>О чём проект?</h1>
            <p>
              Arlezu - это бесплатное приложение, цель которого помочь освоить
              армянский язык - выучить новые слова, разобраться с грамматикой и
              произношением.
            </p>
            <p>
              Незнакомое слово легче выучить в контексте, когда оно связано с
              конкретным образом или ситуацией. Именно так мы осваиваем родной
              язык.
            </p>
            <p>
              Поэтому акцент в приложении сделан на использование визуального
              словаря - наиболее простого способа пополонить словарный запас.
              Каждая карточка дополнена тематической картинкой и примером
              употребления.
            </p>
            <p>
              Концентрируйтесь, запоминая каждое новое слово, создавайте яркие
              визуальные образы и применяйте мнемонические техники.
            </p>
            <p>Успехов в обучении!</p>
          </div>
          <div className={style.textBlock}>
            <h1>Создатели</h1>
            <p>
              Это приложение - проект с открытым исходным кодом, доступным на
              &nbsp;
              <a href="https://github.com/zaharkud" target="_blank">
                GitHub.
              </a>
            </p>
            <p>
              Разработчик: &nbsp;
              <a href="https://github.com/zaharkud" target="_blank">
                Zachary K.
              </a>
            </p>
            <p>
              Графические элементы, используемые на сайте, разработаны автором
              &nbsp;
              <a href="https://ru.freepik.com/author/upklyak" target="_blank">
                @upklyak
              </a>
              &nbsp; и предоставлены через платформу &nbsp;
              <a href="https://ru.freepik.com/" target="_blank">
                freepik.com
              </a>
              &nbsp; с соблюдением &nbsp;
              <a href="https://clck.ru/33B4qQ" target="_blank">
                условий
              </a>
              &nbsp; бесплатного использования контента.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
