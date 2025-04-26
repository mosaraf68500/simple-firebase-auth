import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGooglebtn = () => {
    console.log("signIn btn clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-1/3 mx-auto">
      <h1 className="text-xl text-green-500 pt-4 font-semibold text-center">
        please Login the form:
      </h1>

      {user ? (
        <div className="flex justify-center">
          <button onClick={handleSignOut} className="btn">
            SignOut
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button onClick={handleGooglebtn} className="btn">
            SignIn with Google
          </button>
        </div>
      )}
      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
