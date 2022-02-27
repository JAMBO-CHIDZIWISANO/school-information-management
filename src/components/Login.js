import React, { useState}from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/auth.service';

const Login = (props) => {


    //initializing the password and username state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //initializing error msg and data loading
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    //function that handle username inpute changes
    const onChangeUsername = (e) =>{
        const username = e.target.value;
        setUsername(username);
    }

    //function that handles password input changes
    const onChangePassword = (e) =>{
        const password = e.target.value;
        setPassword(password)
    };

    //function that handles login upon pressing login btn
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

            //checking the authentications of the users
            AuthService.login(username, password).then(
                ()=>{
                    props.history.push("/profile")
                    window.location.reload();
                },
                 (error)=>{
                    const resMessage = 
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    setLoading(false);
                    setMessage(resMessage)
                }
            
            );
        
    };
        
  return (
    
    


    <div className=
    'w-full h-screen flex items-center justify-center bg-hero-img bg-cover bg-center'>
        
        <Link to='/' className=
        'absolute text-white font-extrabold uppercase left-10 top-5'>HOME</Link>
        
        <div className=
        'flex flex-wrap justify-center'>
                
                <form  
                    onSubmit={handleLogin}
                    className=
                    'shadown-md bg-black/50 rounded px-8 py-8 pt-6'>

                    <div className='mb-5'>
                        <label htmlFor='username' className=
                        'block text-white text-sm font-bold mb-2'>
                            Username
                        </label>

                        <input
                        type="text"
                        placeholder='username'
                        id="username"
                        name='username'
                        autoComplete="off"
                        value={username}
                        required
                        onChange={onChangeUsername} 
                        className=
                        'shodow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='password' className='block text-white text-sm font-bold mb-2 '>
                            Password
                        </label>

                        <input 
                        type="password"
                        placeholder="******"
                        id="password"
                        value={password}
                        required
                        name='password'
                        onChange={onChangePassword} 
                        className=
                        'shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>

                    <div className='flex items-center justify-between'>

                    
                    <button className=
                    'bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus;outline-none focus:shadow-outline'>
                        {loading&&( <span className='spinner-border spinner-border-sm'></span>)}
                        
                        <span>Sign in</span>
                    </button>

                    {/* showing the error message 
                    if not connected to server,
                    user input wrong username 
                    or password
                    */}
                    {message && (
                    <div className="">
                        <div className="alert alert-danger" role="alert">
                        {message}
                        </div>
                    </div>
          )}
                    
                    
                    {/*router link for password reset
                    not working currently*/}
                    <span className='text-white'>
                    <a href='/'>reset password</a>
                    </span>
                    
                    </div>



            
                
                </form>

        </div>
    </div>
  )
}

export default Login
