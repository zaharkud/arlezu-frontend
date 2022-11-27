import CardPromo from "../CardPromo/CardPromo";

export default function({ cardsArray, step, setStep, onRoute, setOnRoute }) {

  return (
    <div>
    {
      cardsArray.map(card => (
        <CardPromo key={card.id} card={card} step={step} setStep={setStep} onRoute={onRoute} setOnRoute={setOnRoute}/>
      ))
    }
    </div>
  );
}