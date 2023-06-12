import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleLogin =()=>{
        googleSignIn().then(result=>{
            const user = result.user
            if(user){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

    return (
        <div className="mt-6">
            <button onClick={handleGoogleLogin} className="btn  btn-outline">
                <FaGoogle className='h-6 w-6'></FaGoogle> <span>Continue With Google</span>
</button>
        </div>
    );
};

export default SocialLogin;