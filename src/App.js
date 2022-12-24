import {BrowserRouter} from "react-router-dom";

import 'normalize.css';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <input type="text"/>
        <button className="btn-reset">hello world</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
