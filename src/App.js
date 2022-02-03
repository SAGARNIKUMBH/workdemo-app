import logo from "./logo.svg";
import "./App.css";
import LifeCycleA from "./Component/LifeCycleA";
import FragmentDemo from "./Component/FragmentDemo";
import Table from "./Component/Table";
import PureComp from "./Component/PureComp";
import ParentComp from "./Component/ParentComp";
import RefsDemo from "./Component/RefsDemo";
import FocusInput from "./Component/FocusInput";
import FRParentInput from "./Component/FRParentInput";

function App() {
  return (
    <div className="App">
      <FRParentInput />
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
    </div>
  );
}

export default App;
