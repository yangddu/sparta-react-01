import {Route, Link} from 'react-router-dom';
import Home from './Home';
import Dog from './Dog';
import Cat from './Cat';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog으로 가기</Link>
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dog" component={Dog}>
        {/* <Dog /> */}
      </Route>
      <Route path="/cat" component={Cat}>
        {/* <Cat /> */}
      </Route>
    </div>
  );
}

export default App;
