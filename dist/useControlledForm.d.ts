import React from 'react';
declare const useControlledForm: <T extends Record<string, string | boolean>>(initialFormState: T) => T & {
    form: { [K in keyof T]: {
        id: K;
        value: T[K];
        error: string;
    }; } & {
        reset: () => void;
        clearErrors: () => void;
        hasErrors: () => boolean;
    };
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    attachInputError: (inputName: keyof T, error: string) => void;
};
export default useControlledForm;
