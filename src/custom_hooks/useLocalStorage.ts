import { useEffect, useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = [
    LocalStorageReturnValue,
    { 
      setItem: (newValue: LocalStorageSetValue) => void; 
      removeItem: () => void; 
    }
];

export function useLocalStorage(key: string, initialState: LocalStorageReturnValue = null): UseLocalStorage {
    const [value, setValue] = useState<LocalStorageReturnValue>(() => {
        const storedValue = window.localStorage.getItem(key);
        if (storedValue !== null) {
            try {
                return JSON.parse(storedValue);
            } catch (e) {
                return initialState; 
            }
        }
        return initialState;
    });

    useEffect(() => {
        if (value !== null) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    function setItem(newValue: LocalStorageSetValue): void {
        setValue(newValue);
    }

    function removeItem() {
        window.localStorage.removeItem(key);
        setValue(initialState);
    }

    return [value, { setItem, removeItem }];
}