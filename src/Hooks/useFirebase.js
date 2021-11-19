import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "./../Firebase/firebase.init.js";

initializationAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  // Email Sign In
  const signInWithEmail = (history, redirect_uri) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Google Sign Out
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // set name and profile image url
  function setNameAndImage() {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  }

  // user signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //Add User Info

  // Sign up with Mail and password
  function signUp(e) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        fetch("http://localhost:5000/adduser", {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        });

        setNameAndImage();
        alert("user's have been created");
      })
      .catch((error) => {
        setError(error.message);
      });

    e.preventDefault();
  }

  // Get Name
  function getName(e) {
    setName(e?.target?.value);
  }

  // Get Email
  function getEmail(e) {
    setEmail(e?.target?.value);
  }
  // Get Password
  function getPassword(e) {
    setPassword(e?.target?.value);
  }

  // Get Photo
  function getPhoto(e) {
    setPhoto(e?.target?.value);
  }

  return {
    signInWithEmail,
    user,
    logOut,
    error,
    getPassword,
    getEmail,
    signUp,
    setUser,
    setError,
    getPhoto,
    getName,
    loading,
  };
};

export default useFirebase;
