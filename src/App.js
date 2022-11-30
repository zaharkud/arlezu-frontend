import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import Header from './components/Header/Header';
import CardRouter from './components/CardsDictionary/CardsDictionary';
import CardList from './components/CardList/CardList';
import CardRepeater from './components/CardsRepeater/CardsRepeater';


function App() {

  const [cardsArray, setCardsArray] = useState(cardsContent);
  const [step, setStep] = useState(0);

  const changeRepeatTime = (id, days) => {
    setCardsArray(cardsArray.map(card => card.id === id ? card.repeatTime = days : card));
  }

  return (

    <div className='wrapper'>
      <div className="app">

        <Header />

        <main>
          <Routes>
            <Route path='/' element={<CardList cards={cardsArray} setStep={setStep} />} />
            <Route path='/CardRouter' element={<CardRouter cards={cardsArray} step={step} setStep={setStep} />} />
            <Route path='/CardRepeater' element={<CardRepeater cards={cardsArray} step={step} />} />
          </Routes>
        </main>

      </div>
    </div>

  );
}

export default App;

let cardsContent = [
  {
    id: 1,
    word: 'տուն',
    wordTranslation: 'дом',
    phonetics: 'tun',
    sentence: 'Yo vivo en esa casa blanca',
    sentenceTranslation: 'Я живу в том белом доме',
    imgSrc: './img/house.jpg',
    repeatTime: 0,
  },
  {
    id: 2,
    word: 'աչք',
    wordTranslation: 'глаз',
    phonetics: 'ach’k’',
    sentence: 'Diego tiene los ojos verdes',
    sentenceTranslation: 'Да здравствует жизнь!',
    imgSrc: './img/eye.jpg',
    repeatTime: 0,
  },
  {
    id: 3,
    word: 'կյանքը',
    wordTranslation: 'жизнь',
    phonetics: 'kyank’y',
    sentence: 'Կյանքը անիմաստ է առանց գարեջուր:',
    sentenceTranslation: 'Жизнь бессмысленна без пива.',
    imgSrc: './img/life.jpg',
    repeatTime: 0,
  },
  {
    id: 4,
    word: 'ուրախություն',
    wordTranslation: 'счастье',
    phonetics: 'urakhut’yun',
    sentence: 'Viva la vida!',
    sentenceTranslation: 'Да здравствует жизнь!',
    imgSrc: './img/joy.jpg',
    repeatTime: 0,
  },
  {
    id: 5,
    word: 'քաղաք',
    wordTranslation: 'город',
    phonetics: 'k’aghak',
    sentence: 'Viva la vida!',
    sentenceTranslation: 'Да здравствует жизнь!',
    imgSrc: './img/city.jpg',
    repeatTime: 0,
  },
];


