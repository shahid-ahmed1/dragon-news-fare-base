import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';

const Register = () => {
const {creatNewUser,setUser} =useContext(AuthContext)
  const handleSubmit=(e)=>{
   e.preventDefault();
   const from = new FormData(e.target)
   const name= from.get('name')
   const email= from.get('email')
   const photo= from.get('photo')
   const password= from.get('password')
console.log({name,email,password,})
creatNewUser(email,password)
.then(result=>{
  const user= result.user;
  console.log(user)
} )
.catch(error=>{
  const errorCode= error.code;
  const errorMessage= error.message;
  console.log(errorCode,errorMessage)
})
  }
    return (
        <div className='min-h-screen'>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
<h3 className='
    text-2xl font-semibold text-center'>Register Your Acount</h3>
    <form onSubmit={handleSubmit}>
  <div className="card-body" >
    <fieldset className="fieldset">
      <label className="fieldset-label">Name</label>
      <input type="text" name='name' className="input" placeholder="Name" />
      <label className="fieldset-label">Photo-url</label>
      <input type="text" name='photo' className="input" placeholder="Photo-url" />
      <label className="fieldset-label">Email</label>
      <input type="email" name='email' className="input" placeholder="Email" />
      <label className="fieldset-label">Password</label>
      <input type="password" name='password' className="input" placeholder="Password" />
      <div><a className="link link-hover">Forgot password?</a></div>
      <button  className="btn btn-neutral mt-4">Register</button>
    </fieldset>
  </div>
  </form>
  <p>Alredy Have An Account ? <Link className='text-red-400' to='/auth/login'>Login</Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;