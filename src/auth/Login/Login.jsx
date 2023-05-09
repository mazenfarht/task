import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useRef, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { setAuthToken } from "../../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    loading: false,
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true });
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then((data) => {
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          navigate("/home");
        } else if (user.role === "NormalUser") {
          navigate("/user");
        }
      })
      .catch((errors) => {
        if (typeof errors.response.data.message === "string") {
          setLogin({ ...login, loading: false, err: [{ msg: errors.response.data.message }] });
        } else {
          setLogin({ ...login, loading: false, err: errors.response.data.message });
        }
      });
  };


  const loadingSpinner = () => {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="spinner-border" role="status">
          </div>
        </div>
      </div>
    );
  };

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {login.err.map((err, index) => {
            return (
              <div key={index} className="col-sm-12 alert alert-danger" role="alert">
                {err.msg}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
    
  return (
    <>
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <section className="vh-100" style={{backgroundColor: '#eee'}}>
           <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: 25}}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                        <form onSubmit={(e) => submit(e)}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" ref={(el) => (form.current.email = el)} />
                              <label className="form-label" htmlFor="form3Example3c">Email</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control" ref={(el) => (form.current.password = el)}/>
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                              <button className="btn btn-primary" type="submit">
                                Login
                              </button>
                            </div>
                            </form>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </section>
      )}
      </>
    )
}
