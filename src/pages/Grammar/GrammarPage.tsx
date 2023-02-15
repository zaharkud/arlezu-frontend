import style from "./GrammarPage.module.scss";
import { HeaderSimple, PromoBlock } from "components/index";

const GrammarPage = () => {
  return (
    <div>
      <HeaderSimple page={"Грамматика"} />
      <div className={style.container}>
        <section>
          <h1>Базовые времена</h1>
          <PromoBlock num={"00"} heading={"Введение"} />
          <PromoBlock num={"01"} heading={"Настоящее время"} />
          <PromoBlock num={"02"} heading={"Прошедшее время"} />
          <PromoBlock num={"03"} heading={"Будущее время"} />
        </section>
        <section>
          <h1>Части речи</h1>
          <PromoBlock num={"04"} heading={"Вопросительные слова"} />
          <PromoBlock num={"05"} heading={"Существительное"} />
          <PromoBlock num={"06"} heading={"Прилагательное"} />
        </section>
      </div>
    </div>
  );
};

export default GrammarPage;
