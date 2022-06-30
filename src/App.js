import './App.css';
import Nav from './components/nav/nav';
import Check from './containers/Check/Check';
import Navigation from './containers/Navigation/Navigation';

function App() {
  return (
    <div className="App">

    <div className="grid-container">
      <div>
      <Nav />
      <Check />
      </div>
      
      <div>
        <Navigation />
      </div>
    </div>

    </div>
  );
}

export default App;
