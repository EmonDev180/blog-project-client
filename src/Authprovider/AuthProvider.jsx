
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from '../confic/firebaseConfic';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [isLoading,setIsloding] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    // create user 

    const createUser = (email,password) => {

        return createUserWithEmailAndPassword(auth,email,password)

    }

    // sign in

    const signin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {

        return signInWithPopup(auth,googleProvider);


    }

    // manage user 

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {

            setUser(currentUser)
            console.log('currentUser',currentUser);
        })
        return () => {
          return  unSubscribe()
        }


    },[])

    // signOut 

    const logOut = () => {

        return signOut(auth)
    }



    const authInfo = {
        user,

        createUser,
        googleSignIn,
        signin,
        logOut,
       

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;