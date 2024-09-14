import { useState, useEffect, useCallback } from 'react';

/**
 * A callback function that fetches data.
 * @returns A promise that returns the data (T). This data can be any entity or any array of entities.
*/
type FetchCallback<T> = () => Promise<T>;

/**
 * A hook that fetches data from a callback function.
 * @param callback The callback function that fetches the data.
 * @returns An object with the pending state, the data, the error and a refetch function.
 */
const useFetch = <T>(callback: FetchCallback<T>) => {
    const [pending, setPending] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setPending(true);
        try {
            const result = await callback();
            setData(result);
            setError(null);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setPending(false);
        }
    }, [callback]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { pending, data, error, refetch: fetchData };
}

export default useFetch;