import React, {lazy} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Counter from './features/counter/Counter'
import './app.scss';


function App() {
  const router = createBrowserRouter([
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
