import './App.css';
import Heder from './components/hed_foot/Heder';
import { Route, HashRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <HashRouter  basename="/ataa">
       <Route path={'/'} exact component={Heder} />
    </HashRouter>
    </div>
  );
}

export default App;
