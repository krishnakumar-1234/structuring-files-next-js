"use client"
import Link from "next/link";
import React from "react"
import { useRouter } from "next/navigation";
import { Axios } from "axios";
export default function signup() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const onLogin = async () => {
        
    }
    return (
        <div className="container">
            <h2 className="headigsignup">Signup</h2>
            <div className="line"></div>
            <label htmlFor="username">username</label>
            <input 
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username" />

            <label htmlFor="email">email</label>
            <input 
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email" />

            <label htmlFor="password">password</label>
            <input 
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password" /><br /><br />
            <button 
            className="signupbutton"
             onClick={onLogin}>Signup here
            </button>
            <Link className="loginpagelink" href="/login">Visit signup page </Link>

        </div>
    )
}

// https://hanna2881.hocoos.com
// https://curt453.hocoos.com/