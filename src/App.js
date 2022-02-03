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
import PortalDemo from "./Component/PortalDemo";
import Hero from "./Component/Hero";
import ErrorBoundary from "./Component/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="jokar" />
      </ErrorBoundary>
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
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
