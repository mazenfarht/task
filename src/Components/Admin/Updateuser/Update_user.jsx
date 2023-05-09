import "./updateuser.css";
import { FiTrash } from "react-icons/fi";
import { BsPencil, BsDisplay } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {getAuthToken} from "../../../services/auth";
export const Update_user = () => {
  const { token, user } = getAuthToken();

  const [users, setUsers] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          search: search,
        },
      })
      .then((resposne) => {
        setUsers({ ...users, result: resposne.data, loading: false, err: null });
      })
      .catch((errors) => {
        setUsers({ ...users, loading: false, err: [{ msg: errors.response.data.message }] });
      });
  }, [search, users.update]);

  const loadingSpinner = () => {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {users.err.map((err, index) => {
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
      {users.err !== null && error()}
      {users.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Users</div>
                <div className="card-body" style={{ backgroundColor: "#F8F8F8" }}>
                  
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <h5 className="card-title">
                        User List <span className="text-muted fw-normal ms-2">({users.result.length})</span>
                      </h5>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <table className="table project-list-table table-nowrap align-middle table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.result.map((user) => {
                              return (
                                <tr key={user.id}>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>
                                    <span className="badge badge-soft-success mb-0">{user.userType.role}</span>
                                  </td>
                                  
                                  <td>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <Link to={`/show-user/${user.id}`} className="px-2 text-primary">
                                          <BsDisplay style={{ color: "green" }} />
                                        </Link>
                                      </li>
                                      <li className="list-inline-item">
                                        <a className="px-2 text-primary">
                                          <BsPencil style={{ color: "blue" }} />
                                        </a>
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          onClick={() => {
                                            setUsers({ ...users, loading: true, err: null });
                                            axios
                                              .delete(`http://localhost:4000/api/auth/users/${user.id}`, {
                                                headers: {
                                                  Authorization: `Bearer ${token}`,
                                                },
                                              })
                                              .then((resposne) => {
                                                setUsers({ ...users, loading: false, err: null, update: !users.update });
                                              })
                                              .catch((errors) => {
                                                setUsers({ ...users, loading: false, err: [{ msg: errors.response.data.message }] });
                                              });
                                          }}
                                          className="px-2 text-primary"
                                        >
                                          <FiTrash style={{ color: "red" }} />
                                        </a>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
