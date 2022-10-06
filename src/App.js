import Hero from './components/hero';
import './App.css';
import { GlobalStyle } from "./components/styledItems";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Hero />
    </div>
  );
}

export default App;
