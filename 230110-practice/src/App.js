import './App.css';
import Book from './components/Book';
import ClassCounter from './components/ClassCounter';
import ClassProps from './components/ClassProps';
import Counter from './components/Counter';
import Food from './components/Food';
import Test from './components/Test';
import Test2 from './components/Test2';
import HandlerEx from './components/HandlerEx';
import Event from './components/Event';

function App() {
  let name = '밤비';
  let animal = '비숑';

  const fontStyle = {
    textDecoration: 'underline',
  };

  let a = 4,
    b = 3;

  const title = 'Hello World';
  return (
    <div className="App">
      {/* 이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다</h3> */}

      <h2>
        제 반려 동물의 이름은
        <span style={{ textDecoration: 'underline' }}>{name}</span>입니다.
        <br />
        <span style={fontStyle}>{name}</span>는
        <span style={fontStyle}>{animal}</span>입니다.
      </h2>

      <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>

      <div>{a > b && 'a가 b보다 큽니다'}</div>
      <br />

      <div className="test">{title}</div>
      <div>
        아이디 :
        <input className="input" />
      </div>
      <div>
        비밀번호 :
        <input className="input" />
      </div>

      <div style={{ display: 'flex' }}>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>

      <Test />
      <Test2 />

      <Food />
      <Book
        title="그 해 우리는"
        author="이나은"
        price="18,500원"
        type="드라마/시나리오 대본집"
      />

      <ClassProps
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid={() => console.log('콘솔 띄우기 성공!')}
      />
      <hr />

      <ClassCounter />

      <Counter />

      <HandlerEx />

      <Event />
    </div>
  );
}

export default App;
