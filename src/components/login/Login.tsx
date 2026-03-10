import { useContext, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../../auth/authService";
import { AuthContext, LoginRequest } from "../../auth/authContext";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginRequest>();

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext not found");
  }

  const { setUser } = auth;

  const onSubmit = async (data: LoginRequest) => {
    try {
      const user = await AuthService.login(data);

      setUser(user);

      navigate("/home");
    } catch (error) {
      setShowModal(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              {...register("email")}
              type="text"
              className="form-control"
              id="email"
              placeholder="john@gmail.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
          </div>
        </div>
      </form>

      {showModal && (
        <div className="modal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invalid!</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    setShowModal(false);
                  }}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Login failed!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
