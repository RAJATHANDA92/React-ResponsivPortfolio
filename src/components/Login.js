import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "react-bootstrap/esm/Container";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@gmail.com";

  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == userName && password == userPassword) {
      toast.success("Login Successful");
      navigate("/");
      window.location.reload();
    } else {
      toast.error("Invalid Login Credentials");
    }
  };

  return (
     <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-light text-dark p-5">
      <h3>Login</h3>
      <form>
        
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password:
          </label>
          <input type="password"
          name="password"
              vue={password}
              onChange={(e) => setPassword(e.target.value)}
           className="form-control" id="exampleInputName1" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
          <Link to="/singup" className="mx-2">Not Register?</Link>
        
      </form>
      </div>
    </div>
  );
}

export default Login;
