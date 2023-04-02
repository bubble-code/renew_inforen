import { useState, createContext, useContext, useMemo, useReducer } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";



const AuthContext = createContext(null)
AuthContext.displayName = 'AuthContext'


const initialState = {
    user: null,
    password: null,
    loading: false,
    error: null
}

function AuthReducer(state, action) {
    switch (action.type) {
        case 'signin':
            return { user: action.payload, loading: false, error: null };
        case 'signout':
            return { ...action.payload, user: { email: '', password: '' } }
        default:
            state;
    }
}

export const AuthProvider = ({ children }) => {
    const [controller, dispatch] = useReducer(AuthReducer, initialState)

    const value = useMemo(() => [controller, dispatch], [controller, dispatch])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
    console.log('auth', auth)

    if (auth.user.email === '') {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
}

export function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate()

    if (auth.user.email === '') {
        return <p>You are not logged in.</p>;
    }

    return (<div>
        <>Welcome {auth.user || ''}</>
        <button onClick={() => { auth.signout(() => navigate("/login")); }}>
            Sign out
        </button>
    </div>
    );
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider