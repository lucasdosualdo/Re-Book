import { useState, useEffect } from "react";


const useHandleClickOutside = (outterRef, innerRef, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !outterRef.current.contains(event.target) &&
        innerRef.current === null
      ) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [outterRef, innerRef, callback]);
};

export default useHandleClickOutside;
