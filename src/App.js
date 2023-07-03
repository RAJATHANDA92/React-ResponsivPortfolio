import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState(localStorage.getItem('email'));

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <Routes>

      {data!==null&& data!==undefined && data!=="" ?
        <>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="*" element={ <Navigate to="/" /> } />

        </>
        :
        <>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="*" element={ <Navigate to="/login" /> } />

        </>
      }
      </Routes>
    </div>
  );
}

export default App;
