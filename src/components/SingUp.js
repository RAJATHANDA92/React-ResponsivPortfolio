import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name is Required");
    } else if (email === "") {
      toast.error("Email is Required");
    } else if (password === "") {
      toast.error("Password is Required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      toast.success("Registration Successful");
      navigate("/login");
    }
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-light text-dark p-5">
      <h3>SingUp Form</h3>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            UserName:
          </label>
          <input type="text" 
          name="username"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="form-control" id="exampleInputName1" />
        </div>

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
          <label for="exampleInputEmail1" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
          <Link to="/login" className="mx-2">Already Register?</Link>
        
      </form>
      </div>
    </div>
  );
}

export default SingUp;
