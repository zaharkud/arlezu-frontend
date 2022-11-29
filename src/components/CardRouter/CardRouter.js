import { useEffect, useState } from 'react';
import styles from './CardRouter.module.scss';

export default function({ cards, step, setStep, setOnRoute }) {
  
  //State for sentence`s translation
  let [ sentenceTumbler, setSentenceTumbler ] = useState(false);

  //Showing the previous card
  let changeToPrevStep = () => {
    step <= cards.length-1 && step > 0 ? setStep(--step) : setStep(cards.length-1);
    //Translating the sentence back to armenian
    setSentenceTumbler(false); 
  }

  //Showing the next card
  let changeToNextStep = () => {
    step < cards.length-1 ? setStep(++step) : setStep(0);
    //Translating the sentence back to armenian
    setSentenceTumbler(false); 
  }

  //Returning back to word`s list
  let backToList = () => {
    setOnRoute(false);
    //Translating the sentence back to armenian
    setSentenceTumbler(false);
  }

  //Changing the sentence`s translation
  let sentenceSwitch = () => {
    setSentenceTumbler(!sentenceTumbler);
  }

  return (
        <div>
          <div className={styles.card}>
            <div className={styles.changeToPrevCardWrapper} onClick={changeToPrevStep}></div>
            <div className={styles.changeToNextCardWrapper} onClick={changeToNextStep}></div>
            <div className={styles.textTop}>
              <p className={styles.word}>{ cards[step].word }</p>
              <p className={styles.wordTranslation}>{ cards[step].wordTranslation }</p>
            </div>
            <div className={styles.img}>
              <img src={ cards[step].imgSrc }/>
            </div>
            <div className={styles.textBottom}>
              <p className={styles.sentence}>{ sentenceTumbler ? cards[step].sentenceTranslation : cards[step].sentence }</p>
            </div>
          </div>
          
          <div className={styles.buttons}>
            <button className={styles.favoritesBtn}></button>
            <button className={styles.audioBtn}></button>
            <button className={styles.translationBtn} onClick={sentenceSwitch}></button> 
            <button className={styles.backBtn} onClick={backToList}></button>      
          </div>
        </div>
  );
}