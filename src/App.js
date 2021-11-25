import './App.css';
import { initAuthFlow } from './services/instagram';

function App() {
  return (
    <div className="App">
      <button onClick={initAuthFlow}>Init auth flow</button>
    </div>
  );
}

export default App;
