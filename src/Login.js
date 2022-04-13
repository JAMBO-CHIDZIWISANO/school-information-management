
import React, { useState}from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from './Components/services/auth.service';
const Login = () => {
    
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
    
        const navigate = useNavigate()
    
        //function that handles login upon pressing login btn
        const handleLogin = (e) => {
            e.preventDefault();
            setMessage("");
            setLoading(true);
            
                //checking the authentications of the users
                AuthService.login(username, password).then(
                    ()=>{
                        
                        navigate("/profile")
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
    
    <section className='vh-100'  >
        <div className="container py-5 ">
            <div className="d-flex justify-content-center aligh-items-center">
                <div className=" ">
                    
                                <div className=" col-md-10  ">
                        
                                    <form onSubmit={handleLogin} >

                                        <div className="d-flex align-items-center text-center">
                                            <span className="h1 fw-bold "><h2>BANGULA SECONDARY SCHOOL</h2></span>
                                        </div>

                                        <h2 className="fw-normal text-center">Sign In</h2>
                                        
                                        <div className="form-outline mb-4">
                                            <label 
                                                className="form-label" 
                                                htmlFor="username">Username
                                            </label>
                                             
                                            <input 
                                                type="text" 
                                                autoComplete="false"
                                                placeholder="Enter your Username"
                                                onChange={onChangeUsername}
                                                name="username"
                                                value={username}
                                                required
                                                id="username" 
                                                className="form-control form-control-lg" />    
                                        </div> 

                        <div className="form-outline mb-4">
                            <label 
                                className="form-label" 
                                htmlFor="password">Password
                            </label>
                            
                            <input 
                                type="password" 
                                placeholder="Enter your Password"
                                name='password'
                                value={password}
                                onChange={onChangePassword}
                                id="password" 
                                className="form-control form-control-lg" />
                        </div>

                                        <div className="pt-1 mb-4">
                                            <button 
                                                className="btn btn-primary btn-lg btn-block"
                                                >
                                                {loading&&( <span className='spinner-border spinner-border-sm'></span>)}
                                                <span>Sign in</span>
                                            </button>
                                        
                                        {/* showing the error message if not connected to server, user input wrong username or password*/}                                 
                                        {message && (
                                            <div className="">
                                                <div className="alert alert-danger" role="alert">
                                                {message}
                                                </div>
                                            </div>
                                         )}
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        
            </div>
        </div>
    
                
           
    </section>
                   
                

        
  )
}

export default Login