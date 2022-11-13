import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';





function LoginStart() {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('')
    const navigate = useNavigate()

    const {
        register, 
        handleSubmit
    } = useForm()

    const onSubmit = (data) => {
        setLoading(true)
        setErr('')
        console.log(data)
        axios.post('https://thoughtful-pullover-worm.cyclic.app/api/login', data).then((res) => {
            // setLoading(false)
            console.log(res.data)
            const data = res.data
            if(data['status'] === 'ok' && data['role'] === 'admin'){
                setErr('')
                const token = data['data']
                const adminData = JSON.parse(atob(token.slice(37, -44)))
                const id = adminData['id']
                window.location.href = `https://admin.delzyscholars.com/${id}`
                // getAdmin(adminData['id'], token)
            }else if(data['status'] === 'ok' && data['role'] === 'user'){
                setErr('')
                const token = data['data']
                const userData = JSON.parse(atob(token.slice(37, -44)))
                const id = userData['id']
                window.location.href = `https://student.delzyscholars.com/${id}`
            }else {
                setErr(data['error'])
                setLoading(false)
            }
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        })
    }
    
    const getAdmin = (id, token) => {
        console.log(id)
        axios.get(`http://localhost:5000/api/admin/get/one/${id}`,{
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then((res) => {
            console.log('Go to admin Page')
            console.log(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

    const getUser = () => {
        axios.get(``).then((res) => {
            console.log('Go to admin Page')
        }).catch((err) => {
            console.log(err)
        })
    }


  return (
    <div className="section section-padding">
        <div className="container">

            {/* <!-- Register & Login Wrapper Start --> */}
            <div className="register-login-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Images Start --> */}
                        <div className="register-login-images">
                            <div className="shape-1">
                                <img src="assets/images/shape/shape-26.png" alt="Shape" />
                            </div>


                            <div className="images">
                                <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1660937662/pexels-pavel-danilyuk-7944065-removebg-preview_meqdcj.png" alt="Register Login" />
                            </div>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            <h3 className="title">Login <span>Now</span></h3>

                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('phoneNumber')} type="tel" placeholder="Enter Phone Number" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('password')} type="password" placeholder="Password" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100"> {loading ? <SpinnerCircular color='white' secondaryColor='green' /> : 'Login'} </button>
                                        <p style={{color: 'red', textAlign: 'center'}}>{err}</p>
                                        {/* <a className="btn btn-secondary btn-outline w-100" href="#">Login with Google</a> */}
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </form>
                            </div>
                        </div>
                        {/* <!-- Register & Login Form End --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Register & Login Wrapper End --> */}

        </div>
    </div>
  )
}

export default LoginStart