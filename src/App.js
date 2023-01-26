import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [thick, setThick] = useState(3);
  let box = useRef(null);
  let element;

  useEffect(() => {
    element = box.current;
    console.log(element.clientWidth / 2);
  }, [width]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wooden Shelf</h1>

        <div
          ref={box}
          id="box"
          style={{
            width: `${width * 2}px`,
            height: height * 2 + "px",
            border: "solid brown " + thick * 2 + "px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderBottom: "solid white " + thick * 2 + "px",
              width: width * 2 - 4 * thick,
            }}
          >
            {width - 2 * thick}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label for="width-input">กว้าง: </label>
            <input
              type="number"
              id="width-input"
              onChange={(e) => setWidth(e.target.value)}
              value={width}
            />
          </div>
          <div>
            <label for="height-input">สูง: </label>
            <input
              type="number"
              id="height-input"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <div>
            <label for="thick-input">ไม้หนา: </label>
            <input
              type="number"
              id="thick-input"
              onChange={(e) => setThick(e.target.value)}
              value={thick}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
