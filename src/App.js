import './App.css';
import FellowshipDrinksProvider from './providers/fellowshipDrinks';
import GraduationDrinksProvider from './providers/graduationDrinks';
import WeddingDrinksProvider from './providers/weddingDrinks';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
