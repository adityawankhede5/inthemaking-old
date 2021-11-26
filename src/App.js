import './App.css';
import { getAccessToken, initAuthFlow } from './services/instagram';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get("code");
  return (
    <div className="App">
      <button onClick={initAuthFlow}>Init auth flow</button>
      {
        code &&
        <div>
        <div>{code}</div>
        <button onClick={() => {getAccessToken(code)}}>Get Access Token</button>
        </div>
      }
    </div>
  );
}

export default App;
