import { useEffect, useState } from "react";
import "./show-user.css";
import axios from "axios";
import { getAuthToken } from "../../../services/auth";
import { useParams } from "react-router-dom";

export const ShowUser = () => {
  const { id } = useParams();
  const { token, user } = getAuthToken();

  const [specificUser, setSpecificUser] = useState({
    loading: true,
    result: {},
    err: null,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resposne) => {
        setSpecificUser({ ...specificUser, result: resposne.data, loading: false, err: null });
        console.log(resposne.data);
      })
      .catch((errors) => {
        setSpecificUser({
          ...specificUser,
          result: {
            name: "",
            email: "",
            userType: {
              role: "",
            },
            department: {
              departmentName: "",
            },
          },
          loading: false,
          err: [{ msg: errors.response.data.message }],
        });
      });
  }, []);

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
          {specificUser.err.map((err, index) => {
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
      {specificUser.err !== null && error()}
      {specificUser.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Account Info</div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="small mb-1">Name </label>
                    <input className="form-control" type="text" readOnly value={specificUser.result.name} />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Role</label>
                      <input className="form-control" type="text" readOnly value={specificUser.result.userType.role} />
                    </div>
                    
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1">Email address</label>
                    <input className="form-control" type="email" readOnly value={specificUser.result.email} />
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
