import styled, {keyframes} from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}


const boxAnimation = keyframes`
  0 % {
    border-radius: 0px;
    top: 20px;
  }
   
  30% {
    top: 300px;
  }

  50% {
    top: 700px;
  }

  100% {
    border-radius: 0px;
    top: 20px;
  }
`;


const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 0px;
  position: absolute;
  top: 40px;
  left: 40px;
  animation: ${boxAnimation} 2s 1s infinite linear;
`;
export default App;
