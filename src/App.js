import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [thick, setThick] = useState(3);
  const [deep, setDeep] = useState(30);
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
            position: "relative",
            marginTop: `${(2 * deep) / Math.tan(45)}px`,
          }}
        >
          <div
            style={{
              borderBottom: "solid white " + thick * 2 + "px",
              width: width * 2 - 4 * thick,
              position: "relative",
            }}
          >
            {width - 2 * thick}
            <div
              className="rotate"
              style={{
                borderBottom: `${2 * thick}px solid white`,
                bottom: 2 * -thick,
                left: 0,
                width: deep * 2,
                position: "absolute",
              }}
            >
              {deep - thick}
            </div>
          </div>
          <div
            className="rotate"
            style={{
              borderBottom: `${2 * thick}px solid indianred`,
              top: 2 * -thick,
              left: 0,
              width: deep * 2,
              position: "absolute",
            }}
          ></div>
          <div
            className="rotate"
            style={{
              borderBottom: `${2 * thick}px solid indianred`,
              top: 2 * -thick,
              right: deep * -2,
              width: deep * 2,
              position: "absolute",
            }}
          ></div>
          <div
            className="rotate"
            style={{
              borderBottom: `${2 * thick}px solid indianred`,
              bottom: 2 * -thick,
              right: deep * -2,
              width: deep * 2,
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              borderBottom: `${2 * thick}px solid indianred`,
              top: `${(2 * deep) / -Math.tan(45) + 3 * -thick}px`,
              left: `${(2 * deep) / Math.tan(45) + -thick}px`,
              width: `${width * 2 - thick * 2}px`,
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              borderRight: `${2 * thick}px solid indianred`,
              top: `${(2 * deep) / -Math.tan(45) + 2 * -thick}px`,
              right: `${(2 * deep) / -Math.tan(45) + 2 * -thick}px`,
              height: `${height * 2 - thick * 2}px`,
              position: "absolute",
            }}
          ></div>
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
            <label for="deep-input">ลึก: </label>
            <input
              type="number"
              id="deep-input"
              onChange={(e) => setDeep(e.target.value)}
              value={deep}
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
