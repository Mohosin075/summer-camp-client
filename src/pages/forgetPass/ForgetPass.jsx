import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
    const {resetPassword} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleReset =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        if(!email){
            toast.error('enter your email address')
        }
        resetPassword(email).then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Check Your Email!',
                showConfirmButton: false,
                timer: 3500
              })
              navigate('/login')
        })
        .catch(err=>{
            toast.error(err.message)
        })
    }
  return (
    <form className="mb-40 mt-9 flex justify-center px-4" onSubmit={handleReset}>
      <div className="form-control w-full md:w-1/3">
        <p className="text-center text-sm text-red-400 mb-5">At first provide your email address then click submit button. if show successfull message then check your email (inbox and spam) and reset your password! <br></br> if passsword reset successfull then continue login process.</p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="input input-bordered w-full"
            name="email"
          />
          <input className="btn" type="submit" value='Submit' />
        </div>
      </div>
    </form>
  );
};

export default ForgetPass;
