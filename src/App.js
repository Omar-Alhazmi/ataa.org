import './App.css';
import Heder from './components/hed_foot/Heder';
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
       <HashRouter>
       <Route path='/'> 
       <Heder />
       </Route>
    </HashRouter>
    </>

  );
}

export default App;
