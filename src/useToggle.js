import { useState } from "react";

export const useToggle = ( initialValue = false ) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const toggle = () => {
        setIsVisible(!isVisible);
    }
    return [isVisible,toggle];
}