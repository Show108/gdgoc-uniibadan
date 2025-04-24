import '@fontsource/lato/400.css';
import '@fontsource/prompt/900.css';
import '@fontsource/raleway/500.css';
import '@fontsource/roboto/300.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSession from '../context/useSession';
import { supabase } from '../supabaseClient';

import Loader from '../components/Loader';

export const Home = () => {
  const { user, loading, setUser } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      const confirmLogout = window.confirm('Do you want to log out?');
      if (confirmLogout) {
        supabase.auth.signOut();
        setUser(null);
        navigate('/login');
      } else {
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.history.pushState(null, '', window.location.href);

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate, setUser]);

  if (loading) {
    return <Loader />;
  }

  const username = user?.email.split('@')[0] || 'Guest';

  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  );
};
