import axios from 'axios'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';

function RegisterStart() {

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('')
    const navigate = useNavigate()

    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data)
        setErr('')
        axios.post('https://delzyscholarsapi.herokuapp.com/api/create/user', data).then((res) => {
            console.log(res)
            window.alert('Student Registered Successfully')
            navigate('/login')
        }).catch((err) => {
            console.error(err)
            setErr('Could not register user')
            setLoading(false)
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
                                <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1660937693/pexels-pavel-danilyuk-7944067-removebg-preview_zifchd.png" alt="Register Login" />
                            </div>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            <h3 className="title">Registration <span>Now</span></h3>

                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('name')} type="text" placeholder="Name" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <div className="single-form">
                                        <input required {...register('phoneNumber')} type="tel" placeholder="Phone Number" />
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('email')} type="email" placeholder="Email" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('password')} type="password" placeholder="Password" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('confirmPassword')} type="password" placeholder="Confirm Password" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100"> {loading ? <SpinnerCircular color='white' secondaryColor='green' /> : 'Create an account'} </button>
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

export default RegisterStart