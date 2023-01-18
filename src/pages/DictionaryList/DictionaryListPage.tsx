import style from "./DictionaryList.module.scss";
import {
  HeaderSimple,
  ArrowButtonLeft,
  ArrowButtonRight,
} from "components/index";
import DictionaryListElement from "./DictionaryListElement/DictionaryListElement";

import { useGetCardsByPageQuery } from "store/api/arlezu.api";

import { ICard } from "types/types";
import { useState } from "react";

const DictionaryListPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  //получаем карточки со словами
  const { data = [] } = useGetCardsByPageQuery(page);

  const PrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };
  const NextPage = () => {
    if (page <= 1) setPage((prev) => prev + 1);
  };

  return (
    <div>
      <HeaderSimple page={"Словарь"} />
      {data.map((card: ICard) => (
        <DictionaryListElement key={card.id} card={card} />
      ))}
      <div className={style.pagination}>
        <ArrowButtonLeft onClick={PrevPage}>назад</ArrowButtonLeft>
        <p>cтраница {page}</p>
        <ArrowButtonRight onClick={NextPage}>вперед</ArrowButtonRight>
      </div>
    </div>
  );
};

export default DictionaryListPage;
