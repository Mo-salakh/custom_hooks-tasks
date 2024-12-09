import { useState, useEffect, useCallback } from 'react';

type FetchOptions = {
    params?: Record<string, any>;
};

type FetchState<T> = {
    data: T | null;
    error: string | null;
    isLoading: boolean;
    refetch: (options?: FetchOptions) => Promise<void>;
};

export function useFetch<T>(url: string, initialOptions?: FetchOptions): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = useCallback(async (options: FetchOptions = {}) => {
        setIsLoading(true);
        setError(null);

        const queryParams = new URLSearchParams(options.params).toString();
        const finalUrl = queryParams ? `${url}?${queryParams}` : url;

        try {
            const response = await fetch(finalUrl);
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const jsonData: T = await response.json();
            setData(jsonData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка');
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData(initialOptions);
    }, [fetchData, initialOptions]);

    return { data, error, isLoading, refetch: fetchData };
}