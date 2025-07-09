import ThemeSwitcher from "./components/ThemeSwitcher/index";
import Cards from "./components/Cards/index"
import CardTracker from "./components/CardTracker/index"
import { useState } from 'react';

function App() {
  const [cardsData, setCardsData] = useState([
    { id: 1, title: "First Card", description: "This is the first card." },
    { id: 2, title: "Second Card", description: "This is the second card." },
    { id: 3, title: "Third Card", description: "This is the third card." },
    { id: 4, title: "Fourth Card", description: "This is the fourth card." },
    { id: 5, title: "Fifth Card", description: "This is the fifth card." },
  ]);

  const [rejectedCards, setRejectedCards] = useState(0);
  const [rejectedCardId, setRejectedCardId] = useState([]);

  const [acceptedCards, setAcceptedCards] = useState(0);
  const [acceptedCardId, setAcceptedCardId] = useState([]);

  const handleDecline = (id) => {
    // works when `Decline` button is triggered
    setCardsData((prev) => prev.filter(card => card.id !== id));
    setRejectedCards(rejectedCards + 1);
    setRejectedCardId((prev) => [...prev, id]);
  }

  const handleRemoval = (id) => {
    // works when cross symbol is triggered
    setCardsData((prev) => prev.filter(card => card.id !== id));
  }

  const handleAccept = (id) => {
    // works when Accept button is triggered
    setCardsData((prev) => prev.filter(card => card.id !== id));
    setAcceptedCards(acceptedCards + 1);
    setAcceptedCardId((prev) => [...prev, id]);
  }

  return (
    <>

      <ThemeSwitcher />

      {cardsData.map((card) => (
        <Cards key={card.id} data={card} onDecline={handleDecline} cardRemoval={handleRemoval} onAccept={handleAccept} />
      ))}

      <CardTracker rejectedCardsLength={rejectedCards} removedCardIds={rejectedCardId} acceptedCardsLength={acceptedCards} acceptedCardIds={acceptedCardId}/>

    </>
  )
}

export default App
