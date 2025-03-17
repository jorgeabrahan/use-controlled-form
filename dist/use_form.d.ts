import React from 'react';
declare const useForm: <T extends Record<string, string | number | boolean>>(initialEntries: T) => T & {
    form: { [K in keyof T]: {
        id: K;
        value: T[K];
        error: string;
    }; } & {
        reset: () => void;
        clearErrors: () => void;
        isValid: () => boolean;
    };
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    setValue: (inputKey: keyof T, value: string | boolean | number) => void;
    setEntries: React.Dispatch<React.SetStateAction<T>>;
    setError: (inputKey: keyof T, error: string) => void;
};
export default useForm;
