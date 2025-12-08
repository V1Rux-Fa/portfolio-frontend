import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Person {
  name: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<Person>();

  const navigate = useNavigate();

  const onSubmit = (data: Person) => {
    console.log(data);
    navigate("/login", {
      state: { email: data.email, password: data.password },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10 form">
            <input
              {...register("name")}
              type="text"
              className="form-control"
              id="name"
              placeholder="John"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input
              {...register("lastName")}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Wick"
            />
          </div>
        </div>
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
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              {...register("address")}
              type="text"
              className="form-control"
              id="address"
              placeholder="street 45, apartment b"
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
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
