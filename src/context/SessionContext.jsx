import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../supabaseClient';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) {
          console.error('Error fetching session:', error.message);
        }
        setUser(session?.user || null);
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    const { data: unsubscribe } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      } else {
        console.warn('Unsubscribe is not a function:', unsubscribe);
      }
    };
  }, []);

  return (
    <SessionContext.Provider value={{ user, setUser, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SessionContext;
