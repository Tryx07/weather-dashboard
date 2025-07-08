import './App.css';
import screenshot from './assets/dark.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={screenshot} className="image" alt="screenshot" />
        <p>
          Weather Dashboard - Coming Soon
        </p>
        <a
          className="App-link"
          href="https://github.com/Tryx07/weather-dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          In Progress
        </a>
      </header>
    </div>
  );
}

export default App;
