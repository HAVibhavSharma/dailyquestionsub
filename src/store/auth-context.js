import React, {useState} from "react";

const AuthContext = React.createContext({
    token: '',
    islogin: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) =>{
    const [token, setToken] = useState(null)
    const userIsLoggedIn = !!token;

    const loginhandler = (token) => {
        setToken();
    };

    const logouthandler = (token) => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginhandler,
        logout: logouthandler,

    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;