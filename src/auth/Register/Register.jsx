import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    loading: false,
    result: {},
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
    name: "",
    phonenumber:"",
    userTypeId: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: false });
    axios
      .post("http://localhost:4000/api/auth/register", {
        name: form.current.name.value,
        email: form.current.email.value,
        password: form.current.password.value,
        phonenumber: form.current.phonenumber.value,
        userTypeId: form.current.userTypeId.value,
      })
      .then(() => {
        setRegister({ ...register, loading: false }); // Set loading state to false
        navigate("/login");
      })
      .catch((errors) => {
        setRegister({ ...register, loading: false, err: errors.response ? errors.response.data.message : "Network Error" });
      });
  };

  useEffect(() => {
    setRegister({ ...register, loading: false });
    axios
      .get("http://localhost:4000/api/auth/register")
      .then((data) => {
        setRegister({ ...register, result: data.data, err: null });
      })
      .catch((err) => {
        setRegister({ ...register, err: err.response ? [{ msg: `something went wrong ${err}` }] : [{ msg: "Network Error" }] });
      });
  }, []);

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
    if (!Array.isArray(register.err)) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 alert alert-danger" role="alert">
              {register.err}
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="container">
        <div className="row">
          {register.err.map((err, index) => {
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
      {register.err !== null && error()}
      {register.loading === true ? (
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
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form onSubmit={(e) => submit(e)}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" ref={(el) => (form.current.name = el)}/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" ref={(el) => (form.current.email = el)} />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" ref={(el) => (form.current.password = el)}/>
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control" ref={(el) => (form.current.phonenumber = el)}/>
                      <label className="form-label" htmlFor="form3Example4c">Phone Number</label>
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="role">
                          Role
                        </label>
                        <select
                          className="form-control"
                          type="text"
                          id="role"
                          ref={(val) => {
                            form.current.userTypeId = val;
                          }}
                        >
                          <option value="-1">Select</option>
                          {register.result.roles && register.result.roles.map((role) => {
                           return (
                            <option key={role.id} value={role.id}>
                              {role.role}
                            </option>
                          );
                        })}
                        </select>
                      </div>
                      </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button className="btn btn-primary" type="submit">
                        Register
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
  );
}
