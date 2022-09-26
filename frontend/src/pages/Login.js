import { useEffect, useState } from "react"
import { useLogin } from "../hooks/useLogIn"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login,isLoading,error} =useLogin()

    const handleSubmit = async (e) => {
           e.preventDefault()
           login(email,password)
    }

    return (
        <div className="form-center">
            <form className="login" onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <label>
                    Email:
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>
                    Password:
                </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}

                >
                </input>
                <button disabled={isLoading}>Log In</button>
            </form>
        </div>
    )

}

export default Login