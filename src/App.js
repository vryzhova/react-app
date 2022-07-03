import './App.css';
import './components/marvelCard/marvel.css'
import Card from './components/marvelCard/Card'
import heroes from './components/marvelInfo'


function App() {
  return ( 
    <div className='App'>
      {
        heroes.map((hero)=>
        <Card name={hero.name} img = {hero.img} universe = {hero.universe} alter={hero.alter} 
        friends ={hero.friends} superpowers ={hero.superpowers}
        />
        )
      }
    </div>
  );
}

export default App;