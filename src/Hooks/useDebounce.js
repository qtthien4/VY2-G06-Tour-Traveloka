import React, { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      return setDebounceValue(value);
    }, delay);

    return () => {
      return clearTimeout(timer);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [value]);

  return debounceValue;
}
export default useDebounce;
