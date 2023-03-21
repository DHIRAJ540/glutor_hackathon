import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./utils/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((item) => (
            <Route exact path={item.path} element={item.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
