import './App.css';
import Home from './Home/index';
import CreatePage from './CreatePage/index';
import EditPage from './EditPage/index';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/create" element={<CreatePage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit" element={<EditPage />} />
        
        </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
