import CardPromo from "./CardPromo/CardPromo";

export default function ({ cards, setStep }) {

  return (
    <div>
      {
        cards.map(card => (
          <CardPromo key={card.id} card={card} setStep={setStep} />
        ))
      }
    </div>
  );
}