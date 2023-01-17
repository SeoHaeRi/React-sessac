import './App.css';
import ExUnmount from './components/ExUnmount';
import ShowTimer from './components/ShowTimer';
import TestUseEffect from './components/TestUseEffect';
import UseEffectFetch from './components/UseEffectFetch';

function App() {
  return (
    <div className="App">
      <TestUseEffect />
      <ShowTimer />
      <br />
      <ExUnmount />

      <UseEffectFetch />
    </div>
  );
}

export default App;
