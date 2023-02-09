import NavBar from "../NavBar";
import FormPage from "../Form/FormPage";
import TablePage from "../Table/TablePage";
import EditPage from "../Edit/EditPage";
import NotFound404 from "../NotFound404";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./bootstrap.min.css";
import "./main.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
