import React, {useState} from 'react'

const adminUser = {
    name: "Admin",
    email: "admin@email.co",
    password: "1234"
}

function LoginForm({Login}) {
    const [creds, setCreds] = useState({name: "", email: "", password: ""}) // Current User Logged 
    
    const submitHandler = e => {
        e.preventDefault()
        creds.name = Admin.name
        Login(creds)
    } 

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <div className='App-form-group'>
                    <input className='App-input' type='email' id='email' name='email' placeholder='Email' onChange={e => setCreds({...creds, email: e.target.value})} value={creds.email}/>
                </div>
                <div className='App-form-group'>
                    <input className='App-input' type='password' id='password' name='password' placeholder='Password' onChange={e => setCreds({...creds, password: e.target.value})} value={creds.password}/>
                </div>
                <div>
                    <input className='App-button' type='submit' value='LOG IN'/>
                </div>
                <p className='small'>{"Sign up • Change Password • Need help?"}</p>
            </div>
        </form>
    )
}

export const Admin = adminUser
export default LoginForm