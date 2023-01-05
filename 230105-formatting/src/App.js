import Condition from './components/Condition.js';
import Counter from './components/Counter.js';
import Like from './components/Like.js';
import ObjState from './components/ObjState.js';

function App() {
  // let [teacher, setTeacher] = useState('haeri');

  // function customSetTeacher(name) {
  //   setTeacher(name);
  //   console.log(teacher);
  // }

  return (
    <div className="App">
      {/* <button onClick={() => customSetTeacher('해리')}>한글로!</button>
      <br />
      <br></br>
      <span>{teacher}</span> */}
      {/* <Counter /> */}
      {/* <Condition /> */}
      {/* <Like /> */}
      <ObjState />
    </div>
  );
}

export default App;
