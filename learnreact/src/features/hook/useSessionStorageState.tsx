import { useState } from "react";

export function useSessionStorageState(key: string, initialValue: string) {
    const [value, setValue] = useState(
        () => sessionStorage.getItem(key) ?? initialValue
    );

    function updateValue(nextValue: string) {
        setValue(nextValue);
        sessionStorage.setItem(key, nextValue);
    }

    return [value, updateValue] as const;
}