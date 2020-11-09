
import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
             
             <Route path="/" component={HomeScreen} exact></Route>
             
      </BrowserRouter>
           
    </div>
  );
}

export default App;
