import React from "react";
import Typed from "typed.js";

const TypedSubtitle = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend developer", "Web development", "Informátic Engineer"],
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="">
      <span ref={el} />
    </div>
  );
};

export default TypedSubtitle;
