import React, { useState, useEffect } from 'react'; 
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = () => {
    const [ authUser, setAuthUser ] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
    });

    return () => {
        listen();
    }
},[]);

    const userLogOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out");
        }).catch(error => console.log(error));
        

    }
  return (
    <div>
        {authUser ? <><p>{`Logged in as ${authUser.email}`}</p><button onClick={userLogOut} >Log Out</button></> : <p>Log Out</p>}
    </div>
  )
}

export default AuthContext;