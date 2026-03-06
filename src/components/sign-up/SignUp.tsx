import * as z from "zod";

import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import userService from "../../services/userService";

const userSchema = z.object({
  name: z
    .string({
      error: (name) =>
        name.input === undefined ? "Field is required." : "Invalid input.",
    })
    .min(2, "Too short"),
  lastName: z
    .string({
      error: (lastName) =>
        lastName.input === undefined ? "Field is required." : "Invalid input.",
    })
    .min(2, "Too short"),
  address: z
    .string({
      error: (address) =>
        address.input === undefined ? "Field is required." : "Invalid input.",
    })
    .min(8, "Too short"),
  email: z
    .string({
      error: (email) =>
        email.input === undefined ? "Field is required." : "Invalid input.",
    })
    .email(),
  password: z.string().min(1, "Field required"),
});

export type Person = z.infer<typeof userSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: Person) => {
    userService.postUsers(data);
    navigate("/login");
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
            {errors.name?.message && <p>{errors.name?.message}</p>}
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
            {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
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
            {errors.email?.message && <p>{errors.email?.message}</p>}
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
            {errors.address?.message && <p>{errors.address?.message}</p>}
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
            {errors.password?.message && <p>{errors.password?.message}</p>}
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
