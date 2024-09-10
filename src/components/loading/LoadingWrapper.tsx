import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingWrapper = ({ isPending, children }: { isPending: boolean, children: React.ReactNode }) => {
  return (
    isPending ? (
      <LoadingSpinner />
    ) : children
  );
};

export default LoadingWrapper;