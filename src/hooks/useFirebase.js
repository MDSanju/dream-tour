import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
// custom hook about firebase authentication
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState(false);

  // google sign in method as well as solved route reload issue
  const signInUsingGoogle = (location, redirectUriHistory) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleLoggedInUser = result.user;
        setAuthError("");
        upsertUserToDb(
          googleLoggedInUser.email,
          googleLoggedInUser.displayName
        );
        const destination = location?.state?.from || "/";
        redirectUriHistory.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout method
  const logout = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsloading(false));
  };

  const upsertUserToDb = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://obscure-springs-93029.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Admin select
  useEffect(() => {
    fetch(`https://obscure-springs-93029.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    admin,
    user,
    isLoading,
    authError,
    signInUsingGoogle,
    logout,
  };
};

export default useFirebase;
