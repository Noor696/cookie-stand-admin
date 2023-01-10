'use client';
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)

import { createContext, useState } from "react";  //we store the context inside the state
import axios from "axios";

// 1.1
export const AuthContext = createContext();
// 1.2
export function AuthWrapper({children}) {

    const [globalState, SetGlobalState] = useState({
        tokens : null,
        login,  // (login, == login : login) => in JavaScript when the key equal the value we can make it like this
    })

// login func inside the wrapper
// userInfo(default) : username, pass

    async function login(userInfo) {

        // send a req to server side to check if the user is authenticated or not by using Axios
        const url = "https://cookies-stands-g3.herokuapp.com/api/token/";

        // store the returned value inside variable, we call it (res)
        // use (post) http method that can used to send the request from client side to backend side
        const res = await axios.post(url, userInfo);
        //console.log(res.data.access)
        SetGlobalState({
            tokens : res.data.access,
            login,
        })
    }

    // Java Script asyncronons language so the axios take me a promis (make the functin "asnc" , and put "await" in order to allow these to handle the promisses)

    return(
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )

}