import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);


  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    let from = location.state?.from?.pathname || "/";
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUser = {name : loggedUser.displayName, email : loggedUser.email, image : loggedUser.photoURL, role : 'student'}
          fetch('http://localhost:5000/users',{
            method : "POST",
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(saveUser)
          })
          .then(res=>res.json())
          .then((data)=>{
                console.log('data', data);
                navigate(from, { replace: true });
          })


        })
        .catch((err) => {
          console.log(err);
        }); 
  };

  return (
    <div className="mt-6">
      <button onClick={handleGoogleLogin} className="btn  btn-outline">
        <FaGoogle className="h-6 w-6"></FaGoogle>{" "}
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
