import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import auth from '../firebase/fairebase.config';

const Login = () => {

  const { userLogin,setUser} =useContext(AuthContext)

  const handleLogin=(e)=>{
    e.preventDefault();
    const email= e.target.email.value
    const password= e.target.password.value;
    console.log(email,password)
    userLogin(email,password)
    .then(result=>{
      const user= result.user;
      console.log(user)
      setUser(user)
    } )
    .catch(error=>{
      alert(error.code)
    })
  }
    return (
        <div className='min-h-screen'>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
    <h3 className='
        text-2xl font-semibold text-center'>Login Your Acount</h3>
        <form onSubmit={handleLogin}>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label  className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
      </form>
      <p>Don't Have An Account ? <Link className='text-red-400' to='/auth/reigister'>Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;