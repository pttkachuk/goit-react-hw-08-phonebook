import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { Suspense, lazy, useEffect } from 'react';
import { logOutThunk, refreshUserThunk } from 'redux/userOperation';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [dispatch, token]);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {userData ? (
            <>
              <Link to="/contacts">Contacts</Link>
              <div>
                <p>Hello, {userData.name}!</p>
                <button onClick={handleLogOut}>Log Out</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
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
