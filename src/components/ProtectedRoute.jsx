// import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function ProtectedRoute({ children }) {
  const user = supabase.auth.user();

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
