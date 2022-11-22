import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Contest from './components/Contest';
function App() {


  return (
    <main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
      </Routes>

    </main>
  );
}

export default App;
