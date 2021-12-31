import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom'
import { SinglePost } from './component/SinglePost';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/singlepost'  element={<SinglePost/>} />
      </Routes>
    </div>
  );
}

export default App;
