import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import './App.css';
import { Home } from './pages/Home';
import Invite from './pages/Invite';
import Wallet from './pages/Wallet';
import RootLayouts from './layouts/RootLayouts';

import Signup from './pages/signin/Signup';

import RegisterLayout from './layouts/RegisterLayout';
import { Account } from './pages/Account';
import Login from './pages/signin/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoute />}>
        <Route path='/main' element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path='invite' element={<Invite />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Route>

      <Route path='/' element={<RegisterLayout />}>
        <Route index element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
