import { useReducer } from 'react';

function toggleReducer<T,K>(state:T, action:K) {
    if (typeof action === 'string') {
        return action;
    }

    if (Array.isArray(state)) {
        const currentIndex = state.indexOf(state);
        const nextIndex = (currentIndex + 1) % state.length;
        return state[nextIndex];
    }

    return !state;
}

export function useToggle<P>(initialValues:P) {
    const [state, dispatch] = useReducer(toggleReducer, initialValues || [true, false]);

    const toggle = (value?: any) => {
        dispatch(value);
    };

    return {state, toggle};
}