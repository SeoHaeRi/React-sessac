import './App.css';
import ExUnmount from './components/ExUnmount';
import ShowTimer from './components/ShowTimer';
import TestUseEffect from './components/TestUseEffect';

function App() {
  return (
    <div className="App">
      <TestUseEffect />
      <ShowTimer />
      <br />
      <ExUnmount />
    </div>
  );
}

export default App;
