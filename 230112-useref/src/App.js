import './App.css';
import Comparing from './components/Comparing';
import ConditionalRender from './components/ConditionalRender';
import ExConditional from './components/ExConditional';
import RefDom from './components/RefDom';
import RefDomPrac from './components/RefDomPrac';
import RefFocusPrac from './components/RefFocusPrac';
import TestRef from './components/TestRef';

function App() {
  return (
    <div className="App">
      <TestRef />
      <RefDom />
      <RefDomPrac />
      <RefFocusPrac />
      <Comparing />
      <br />
      <ConditionalRender />
      <ExConditional />
    </div>
  );
}

export default App;
