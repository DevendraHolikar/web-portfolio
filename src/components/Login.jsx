import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("dvholikar@gmail.com");
  const [userPassword, setUserPassword] = useState("");
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    signInWithEmailAndPassword(auth, userName, userPassword)
      .then((userCredential) => {
        userCredential.user;
        navigate("/profile");

      })
      .catch((error) => {
        setUserErrorMessage(error.code);
      });
  };

  return (
    <div className="w-full grid place-items-center mt-auto h-screen">
      <div className="card bg-base-200 w-[90%] md:w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email id</legend>
            <input
              type="email"
              className="input  w-full"
              placeholder="Type here"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input  w-full"
              placeholder="Type here"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p className="error text-red-500">{userErrorMessage}</p>
            <button onClick={handleSubmitClick} className="btn w-full btn-neutral mt-2">
              Submit
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
