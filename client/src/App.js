import React, { lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

const Home = lazy(() => import('./pages/home/Home'))
const Counter = lazy(() => import("./features/counter/Counter"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "home1",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback={<>...</>}>
          <RouterProvider router={router} />
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
