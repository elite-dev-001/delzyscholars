import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';


function PrivateStart() {
    const {
        register,
        handleSubmit
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data) => {

        console.log(data)

        const smsData = {
            'number': data['number'],
            'message': 'Thank you for indicating interest in DELZY SCHOLARS PRIVATE SESSION/TUTORIALS \n Kindly Complete the set-up \n - By texting our admin via whatsapp: https://wa.link/zafw8i \n By sms: 07038101576 \n DELZY SCHOLARS: Redefining learning & stirring you to academic greatness'
        }

        axios.post('https://africanspringsapi.herokuapp.com/api/post/send/sms',smsData).then((res) => {

            const admin = {
                'number':'07038101576',
                'message': `${data['name']} just booked for an ${data['mode']} private tutorial in ${data['category']} with phone number: ${data['number']}`
            }
            
            axios.post('https://africanspringsapi.herokuapp.com/api/post/send/sms', admin).then((res) => {
            window.alert('Message Sent Successfully')
            navigate('/')
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
    };
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
                                <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1659554958/rsz_whatsapp_image_2022-08-03_at_45019_pm-removebg-preview_nhhsuz.png" alt="Register Login" />
                            </div>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            <h3 className="title">Register for a Private Tutor <span>Now</span></h3>

                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('name')} type="text" placeholder="Name" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('number')} type="tel" placeholder="Phone" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <div className="single-form">
                                        <input required {...register('email')} type="email" placeholder="Email" />
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <label htmlFor='category'>Category for private tutoring</label>
                                        <select required {...register('category')} className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  name='category' >
                                            <option value=''>Choose ...</option>
                                            <option value='waec'>WAEC</option>
                                            <option value='jamb'>JAMB</option>
                                            <option value='putme'>POST-UTME</option>
                                            <option value='uniport'>UNIPORT</option>
                                            <option value='rsu'>RSUST</option>
                                        </select>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <div className="single-form">
                                        <input required {...register('subject')} type="text" placeholder="Type your preferred subject(s)" />
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <label htmlFor='mode'>Mode of Tutoring</label>
                                        <select required {...register('mode')} className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  name='mode' >
                                            <option value=''>Choose ...</option>
                                            <option value='offline'>Offline</option>
                                            <option value='online'>Online</option>
                                        </select>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100">Book Now</button>
                                        {/* <a className="btn btn-secondary btn-outline w-100" href="#">Sign up with Google</a> */}
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

export default PrivateStart