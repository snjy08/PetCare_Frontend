import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allApi'

function Auth({ register }) {

  const location = useNavigate()
  const regForm = register ? true : false

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  console.log(user);

  //register
  const registerData = async () => {
    const { username, email, password } = user
    if (!username || !email || !password) {
      alert('Please fill the form')
    }
    else {
      //apicall
      const result = await registerAPI(user)
      console.log(result); 
      if (result.status == 200) {
        alert(result.data)
        location('/login')
        setUser({username:"" , email:"", password:""})
      }
      else {
      alert(result.response.data)
      }
    } 
  } 


  //login
  const loginData = async () => {
const { email,password} =user
if (!email || !password) {
  alert('Please fill the form')
}
else{
  const result = await loginAPI(user)
  console.log(result);
  if (result.status == 200) {
    alert('Login successfull') 
    sessionStorage.setItem('existinguser',JSON.stringify(result.data.existingUser)) 
    sessionStorage.setItem('token',result.data.token)
    location('/home')
  }
  else{ 
    alert(result.response.data)
  }
} 
console.log(user);
  }
  return (
    <div style={{ height: '80vh' }}>
      <section class="h-100 gradient-form" style={{ backgroundColor:'' }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">

                      <div class="text-center">
                        <img src="https://thumbs.dreamstime.com/b/gold-dog-paws-background-vector-graphic-design-79540239.jpg"
                     width={'50px'} alt="logo"/>
                        <h4 class="mt-1 mb-5 pb-1">We are The Bark Venue Team</h4>
                      </div>

                      <form>
                        {regForm ? <b>Create your account</b> : <b>Please login to your account</b>}

                        {regForm ? <div class="form-outline mt-3 ">
                          <input type="email" id="form2Example11" class="form-control"
                            onChange={(e) => setUser({ ...user, username: e.target.value })} /> 
                            {/* 3dots:rest operator */}
                          <label class="form-label" >Username</label> 
                        </div> : null}

                        <div class="form-outline mt-3 ">
                          <input type="email" id="form2Example11" class="form-control"
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                          <label class="form-label" >Email</label>
                        </div>

                        <div class="form-outline mt-2">
                          <input type="password" id="form2Example22" class="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })} /> 
                          <label class="form-label" >Password</label>     
                                              </div>

                        <div class="text-center pt-1 mt-5 pb-1">
                          {regForm ? <button onClick={registerData} class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 px-3 py-3" type="button">Register
                          </button> : <button onClick={loginData} class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 px-3 py-3" type="button">Log
                            in</button>}
                          <a class="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          {regForm ? <p class="mb-0 me-2">Already you have an account?</p> : <p class="mb-0 me-2">Don't have an account?</p>}

                          {regForm ? <button type="button" class="btn btn-outline-danger"><Link to={'/login'}>
                            Login
                          </Link></button> : <button type="button" class="btn btn-outline-danger"><Link to={'/register'}>
                            Create New?
                          </Link></button>}
                        </div>
                      </form>

                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Auth