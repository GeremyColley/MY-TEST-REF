import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const myDiv = useRef();

  console.log("render and counter = ", counter);

  useEffect(() => {
    console.log("Début");
    const handleClickOutside = (event) => {
      if (!myDiv.current.contains(event.target)) {
        console.log("J'ai cliqué à l'extérieur de ma div rouge");
        wrapper.classList.add('active');
      }
    };

    const $ = document;
    $.addEventListener("click", handleClickOutside);
    const wrapper = $.querySelector('.my-div');
    return () => {
      console.log("Return remove");
      $.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return(
    <>
      <div className="my-div" ref={myDiv}>
        <p>je suis la </p>
        <div>
          <span>{counter}</span>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >Increment</button>
        </div>
      </div>
      
    </>
  );
}

export default App;
