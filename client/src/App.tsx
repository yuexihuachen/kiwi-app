import React, {lazy} from 'react';
import { useRoutes } from 'react-router-dom';
import './app.scss';

const Counter = lazy(() => import('./features/counter/Counter'))

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Counter />
    },
    {
      path: "/edit",
      element: <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        {
          routes
        }
      </header>
    </div>
  );
}

export default App;
