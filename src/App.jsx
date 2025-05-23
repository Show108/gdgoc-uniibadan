import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Layout from "./layout/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
