import styles from './CardRouter.module.scss';

export default function({ cards, step, setStep, setOnRoute }) {
  

  let changeStep = () => {
    step < cards.length-1 ? setStep(++step) : setStep(0); 
  }
  let backToList = () => {
    setOnRoute(false);
  }

  return (
        <div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={ cards[step].imgSrc }/>
            </div>
            <div className={styles.text}>
              id: { cards[step].id }
              <br/>
              word: { cards[step].word}
              <br/>
            </div>
          </div>
          
          <div className={styles.buttons}>
            <button onClick={backToList}>BACK</button>
            <button onClick={changeStep}>NEXT</button> 
          </div>
        </div>
  );
}