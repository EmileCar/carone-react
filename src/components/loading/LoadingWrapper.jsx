import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingWrapper = ({ isPending }) => {
  return (
    isPending ? (
      <LoadingSpinner />
    ) : children
  );
};

export default LoadingWrapper;