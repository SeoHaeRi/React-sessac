import FancyBorder from './components/FancyBorder';
import Img from './components/Img';
import StyledApp from './components/StyledApp';

function App() {
  return (
    <div className="App">
      <Img />
      <FancyBorder color="pink">
        <h1>hello props.children</h1>
        <span>이건 유용합니다!</span>
        <Img />
      </FancyBorder>
    </div>
  );
}
export default App;
