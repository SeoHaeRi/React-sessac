import './App.css';
import styled from 'styled-components';
import Start from './components/Start';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './components/Mbti';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          '결과'
        )}
      </Main>
    </>
  );
}

export default App;
