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
import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";
import ClickCounterTwo from "./Component/ClickCounterTwo";
import HoverCounterTwo from "./Component/HoverCounterTwo";
import User from "./Component/User";
import Counter from "./Component/Counter";
import ComponentC from "./Component/ComponentC";
import { UserProvider } from "./Component/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Vishwas">
        <ComponentC />
      </UserProvider>
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <User render={(isLoggedIn) => (isLoggedIn ? "Sagar" : "Guest")} /> */}
      {/* <HoverCounterTwo /> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter name="Sagar" /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="jokar" />
      </ErrorBoundary> */}
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
