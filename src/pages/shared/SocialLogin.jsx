import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="m-4 ">
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="flex justify-center">
        <button onClick={handleGoogleSignIn} className="btn">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
