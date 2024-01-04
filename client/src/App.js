import React, { lazy } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';

const Home = lazy(() => import('./pages/home/Home'))
const Counter = lazy(() => import("./features/counter/Counter"))

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Counter />} />
          <Route
            path="home1"
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
      </Routes>
      </header>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
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
