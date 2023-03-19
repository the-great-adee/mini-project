import React from 'react'
import React, { useState, useEffect } from 'react'
import { auth } from "../firebase";

const AuthDetails = () => {
    const [ authUser, setAuthUser ] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged((auth, user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
    });
},[]);
  return (
    <div>AuthDetails</div>
  )
}

export default AuthDetails;