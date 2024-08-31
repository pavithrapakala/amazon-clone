import Signin from './components/signin';
import Signup from "./components/signup";
import Home from "./components/home"
import './App.css';

function App() {
  return (
    <div className="App">
    <Signin/>
    <Signup/>
    <Home/>
    </div>
  );
}

export default App;
