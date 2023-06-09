// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authenticate from './components/Authenticate';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
