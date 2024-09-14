import { useEffect } from 'react';

/** An array that stores all callbacks that need to run on resize */
const resizeCallbacks: Array<() => void> = [];

const handleResize = () => {
  resizeCallbacks.forEach((callback) => callback());
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize);
}

/**
 * A hook that runs a callback whenever the window is resized.
 * @param callback The callback to run on resize
 * @returns void
 */
export const useWindowResize = (callback: () => void) => {
  useEffect(() => {

    resizeCallbacks.push(callback);

    callback();

    return () => {
      const index = resizeCallbacks.indexOf(callback);
      if (index > -1) {
        resizeCallbacks.splice(index, 1);
      }
    };
  }, [callback]);
};
