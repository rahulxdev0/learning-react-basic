import React, { useRef, forwardRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
});

export default MyInput;
