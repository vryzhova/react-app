import Card from './components/card/Card';
import cards from './components/card/data.json';
import style from './App.css';



function App() {
  return (
    <div className={style.App}>
      {
      cards.map((card) =>
      <Card price = {card.price} inet = {card.inet} colorName = {card.colorName} color = {card.color} isChecked = {card.isChecked}/>
      )
    }
    </div>
  );
}

export default App;
