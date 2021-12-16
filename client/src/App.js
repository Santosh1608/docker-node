import { Route, Routes } from "react-router-dom";
import MyName from "./MyName";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <h1>NAME APP</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getname" exact element={<MyName />} />
      </Routes>
    </div>
  );
}

export default App;
