import {useState, createContext, useContext, useEffect} from "react";
import {createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { authentication } from "../firebase-config";

const UserContext = createContext({});


export const  useUserContext = () => useContext(UserContext) ;
export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");


    useEffect(() => {
      setLoading(true)
        const unsubscribe = onAuthStateChanged(authentication, res => {
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        });
        return unsubscribe;
      
    }, []);
    

    const registerUser = (email,name,password) => {

        setLoading(true);
        createUserWithEmailAndPassword(authentication, email, password)
        .then(() => {
           return updateProfile(authentication.currentUser, {
                displayName: name,
            });
        })
        .then((res)=> console.log(res))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
        alert("success");
    };

    const signInUser = (email, password) => {
            setLoading(true);
            signInWithEmailAndPassword(authentication,email,password)
            .then((res)=> console.log(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    // const forgotPassword = {email} -> {

    // }




    const contextValue = {
        user,loading,error,registerUser, signInUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}




