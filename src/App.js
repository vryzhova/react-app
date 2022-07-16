import Card from './components/card/Card';
import cards from './components/card/data.json';
import style from './App.css';
import { useState } from 'react';



function App() {
  const [currentData, setCurrentData] = useState(cards);
    const handleChange = (id) => {
        setCurrentData(prevState => prevState.map(card => card.id === id ? ({...card, isChecked: !card.isChecked}) : card) )
    };
    
  return (
    <div className={style.App}>
      {
      currentData.map((card) =>
      <Card  key={card.id}  price = {card.price} inet = {card.inet} colorName = {card.colorName} color = {card.color} isChecked = {card.isChecked}   {...card}  onClick={handleChange}
      />
      )
    }
    </div>
  );
}

export default App;
