import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import Homepage from "./Components/Homepage";
import "./App.css";

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <div>
    {/* <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return ("Hello Welcome")
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
          
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider> */}
    <Homepage />
    </div>
  );
}

export default App;
