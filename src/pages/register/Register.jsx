import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [show, setShow] = useState(false)
    const {createUser, updateUserProfile} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user} = useContext(AuthContext)
  console.log(user);

  const onSubmit = (data) => {


    if(data.password !== data.confirmPass){
        toast.error('Password Does not match!')
        return;
    }

    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
        console.log(result.user);
        if(result.user){
            toast("User create Successfully!")
            updateUserProfile(data.name , data.photoURL)
            .then(result=>{
                console.log(result);
            }).catch(err=>{
                console.log(err);
            })
        }
    })
    .catch(err=>{
        toast.error(err.message)
    })
  };
  return (
   <>
   <Helmet>
        <title>SpeckEasy | Register</title>
      </Helmet>
    <div className="hero min-h-screen py-10">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5 text-orange-600">
            Sign up now!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg bg-slate-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL*</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <div className="flex items-center justify-between">
              <input
                type={show ? 'text' : 'password'}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered relative w-full"
              />
              <span className="absolute right-10 p-2 cursor-pointer" onClick={()=>setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</span>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600">required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password*</span>
              </label>
              <div className="flex items-center justify-between">
              <input
                type={show ? 'text' : 'password'}
                {...register("confirmPass", { required: true })}
                placeholder="Confirm Password"
                className="input input-bordered w-full relative"
              />
              <span className="absolute right-10 p-2 cursor-pointer" onClick={()=>setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</span>
              </div>
              {errors.confirmPass?.type === "required" && (
                <p className="text-red-600">required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white bg-orange-700 hover:bg-orange-800 border border-l-8 border-r-8 border-green-800 hover:border-orange-900"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="text-center mb-10">
            <p>
              Already have an account! Please{" "}
              <Link to="/login" className="hover:underline text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Register;
