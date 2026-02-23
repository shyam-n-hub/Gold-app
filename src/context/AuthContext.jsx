// ============================================
// Auth Context - Firebase Authentication
// ============================================
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { ref, set, get } from 'firebase/database';
import { auth, database } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

// Hardcoded admin emails — ONLY these accounts get admin access
const ADMIN_EMAILS = ['admin1@gmail.com', 'admin2@gmail.com'];

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userRole, setUserRole] = useState('user');
    const [loading, setLoading] = useState(true);

    // Check if email is admin
    function isAdminEmail(email) {
        return ADMIN_EMAILS.includes(email?.toLowerCase());
    }

    // Register a new user
    async function register(email, password, displayName) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
        // Save user profile in database
        await set(ref(database, `users/${userCredential.user.uid}`), {
            email,
            displayName,
            role: isAdminEmail(email) ? 'admin' : 'user',
            createdAt: Date.now()
        });
        return userCredential.user;
    }

    // Login
    async function login(email, password) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }

    // Logout
    async function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (user) {
                // Determine role directly from email — no database lookup needed
                setUserRole(isAdminEmail(user.email) ? 'admin' : 'user');
            } else {
                setUserRole('user');
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userRole,
        isAdmin: userRole === 'admin',
        loading,
        register,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
