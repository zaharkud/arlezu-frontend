import styles from './CardPromo.module.scss';

export default function({ card, step, setStep, onRoute, setOnRoute }) {

  let startRoute = () => {
    setStep(card.id - 1);
    setOnRoute(true);
  }

  return (
        <div className={styles.card} key={ card.id } onClick={startRoute}>
          <div className={styles.img}>
            <img src={ card.imgSrc }/>
          </div>
          <div className={styles.text}>
              <div className={styles.textTop}>
                <p className={styles.word}>{ card.word }</p>
              </div>
              <div className={styles.textBottom}>
                <p className={styles.phonetics}>[{ card.phonetics }]</p>
                <p className={styles.wordTranslation}>{ card.wordTranslation }</p>
              </div>
          </div>
        </div>
  );
}