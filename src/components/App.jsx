import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { Suspense, lazy, useEffect } from 'react';
import { refreshUserThunk } from 'redux/userOperation';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [dispatch, token]);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
