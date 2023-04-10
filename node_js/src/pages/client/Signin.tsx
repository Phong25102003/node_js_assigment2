import React from 'react'
import { useForm } from "react-hook-form"
import { login } from '../../api/signin'
import { useNavigate } from 'react-router-dom'



const Signin = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const { data: user } = await login(data)
      localStorage.setItem('user', JSON.stringify(user))

      // kiểm tra role của user để chuyển hướng tới trang tương ứng
      if (user.role === "admin") {
        navigate('/admin/products')
      } else {
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{backgroundColor:'#222222', color:'white'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address"
            }
          })} />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" {...register("password", { required: "Password is required" })} />
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div >
  )
}

export default Signin
