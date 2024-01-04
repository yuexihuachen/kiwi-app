import React, { lazy } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

const Home = lazy(() => import('./pages/home/Home'))
const Counter = lazy(() => import("./features/counter/Counter"))


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback={<>...</>}>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="home1" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </React.Suspense>

      </header>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
