import React, {lazy, Suspense} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './app.scss';

const Counter = lazy(() => import('./features/counter/Counter'))

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Counter />,
      errorElement: <div>debug</div>
    },
    {
      path: "/edit",
      element: <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>,
    errorElement: <div>debug</div>
    }
  ])

  return (
    <div className="App">

      <Suspense fallback={<div>加载中</div>}>
        <RouterProvider router={router} />
      </Suspense>


    </div>
  );
}

export default App;
