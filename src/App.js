import logo from './logo.svg';
import './App.css';
import StateBase from './components/statebasics';
import Counter from './components/counter';
import useEffects from './components/useEffects';
import Book from './components/book';

function App() {
  return (
    <div className="App">
  {/* <Counter></Counter>
    <StateBase></StateBase>
      <useEffects></useEffects> */}

    <Book></Book>
      
    </div>
  );
}

export default App;
