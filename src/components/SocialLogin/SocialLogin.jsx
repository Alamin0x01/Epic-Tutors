import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        const user = userCredential.user;
        const savedUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          role: "student",
        };
        fetch(
          "https://epic-tutors-server-side-cxea340sv-alamin0x01.vercel.app/adduser",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(savedUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-info btn-outline"
        >
          Sign in with Google
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
