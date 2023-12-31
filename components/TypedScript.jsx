"use client";
import React from "react";
import Typed from "typed.js";

export function TypedScript() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "'Hello there! Welcome aboard to ColAi , ready to assist you. Chat now and lets connect .Engage and discover the world of ease'",
      ],
      typeSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span
        className="lg:text-[19px] font-[500] text-gray-400 leading-[1rem] lg:leading-[2rem] text-[15px]"
        ref={el}
      />
    </div>
  );
}
