import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('');
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser => {
      setUser(currentUser)
      setLoading(false);
    }))

    return () => {
      unSubscribe()
    }
  },[])



  const authInfo = {
    cartItems,
    setCartItems,
    total,
    setTotal,
    loading,
    setLoading,
    language,
    setLanguage,
    category,
    setCategory,
    user,
    setUser,
    createUser,
    signInUser,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
