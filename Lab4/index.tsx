import PassingFunctions from "./PassingFunctions";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvents from "./ClickEvents";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvents from "./PassingDataOnEvents";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import { useState } from "react";

export default function Lab4() {
  const [counter, setCounter] = useState(0);
  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      <ArrayStateVariable />
      <BooleanStateVariables />
      <ChildStateComponent counter={counter} setCounter={setCounter} />
      <ClickEvents />
      <Counter />
      <DateStateVariable />
      <ObjectStateVariable />
      <ParentStateComponent />
      <PassingDataOnEvents />
      <StringStateVariables />
      <PassingFunctions theFunction={sayHello} />
      <ReduxExamples/>
    </div>
);}