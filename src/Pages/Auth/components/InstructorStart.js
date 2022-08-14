import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';


const config = {
    reference: (new Date()).getTime().toString(),
    email: "support@delzyscholars.com",
    amount: 200000,
    publicKey: 'pk_live_6f16d735236a5774d9444768ec143fd99c87aea7'
}

const onSuccess = (reference) => {
    console.log(reference)
    window.alert('Payment Successful')
    window.location.href = '/'
}

const onClose = () => {
    console.log('closed')
    window.alert('Payment could not be processed')
    window.location.href = '/instructor'
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button className="btn btn-primary btn-hover-dark w-100" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Submit</button>
        </div>
    );
}


function InstructorStart() {
    const {
        register,
        handleSubmit
    } = useForm();
    const navigate = useNavigate();

    const [unis, setUni] = useState([])
    const [disp, setDisplay] = useState('none')

    const onSelect = (e) => {
        console.log(e)
        e === 'und' ? setDisplay('block') : setDisplay('none')
    }

    useEffect(() => {
        axios.get('https://nigeria-universites.p.rapidapi.com/universities/', {
            headers: {
                'X-RapidAPI-Key': 'd2b189447bmshd208176af3d8decp16a5d0jsne01e1a91f53b',
                'X-RapidAPI-Host': 'nigeria-universites.p.rapidapi.com'
              }
        }).then((res) => {
            console.log(res.data)
            setUni(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const onSubmit = (data) => {

        console.log(data)

        const smsData = {
            'number': data['number'],
            'message': 'Thank you for indicating interest in DELZY SCHOLARS PROJECT WRITING \n Kindly Complete the set-up \n - By texting our admin via whatsapp: https://wa.link/zafw8i \n By sms: 07038101576 \n DELZY SCHOLARS: Redefining learning & stirring you to academic greatness'
        }

        axios.post('https://africanspringsapi.herokuapp.com/api/post/send/sms',smsData).then((res) => {

            const admin = {
                'number':'07038101576',
                'message': `${data['name']} just booked for project writing in ${data['category']} with phone number: ${data['number']}. In Faculty: ${data['faculty']} and Department ${data['department']}. Topic: ${data['topic']} `
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
                                <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1659554030/WhatsApp_Image_2022-08-03_at_4.55.56_PM-removebg-preview_tle2dg.png" alt="Register Login" />
                            </div>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            <h3 className="title">Fill the form & we will get across to you <span>Soon</span></h3>

                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('name')} type="text" placeholder="Name" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <div className="single-form">
                                        {/* <label htmlFor='uni'>Select School</label> */}
                                        <select required {...register('uni')} className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  name='uni' >
                                            <option value=''>Select School</option>
                                            {
                                                unis.map((uni, index) => <option key={index} value={uni['name']}>{uni['name']}</option>)
                                            }
                                            <option value='msc'>Others</option>
                                        </select>
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        {/* <label htmlFor='degree'>Select Degree</label> */}
                                        <select onChange={(e) => onSelect(e.target.value)} required  className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  name='degree' >
                                            <option value=''>Select Degree</option>
                                            <option value='it'>Master (M.Sc)</option>
                                            <option value='bsc'>Bachelor (B.Sc)</option>
                                            <option value='beng'>Bachelor (B.Engr)</option>
                                            <option value='b_pharm'>Bachelor (B.Pharm)</option>
                                            <option value='hnd'>Higher National Diploma (HND)</option>
                                            <option value='und'>Undergraduate</option>
                                        </select>
                                    </div>

                                    <div className="single-form" style={{display: disp}}>
                                        {/* <label htmlFor='level'>Select Level</label> */}
                                        <select required {...register('level')} className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  >
                                            <option value=''>Select Level</option>
                                            <option value='l100'>Level 100</option>
                                            <option value='l200'>Level 200</option>
                                            <option value='l300'>Level 300</option>
                                            <option value='l400'>Level 400</option>
                                            <option value='l400'>Level 500</option>
                                        </select>
                                    </div>

                                    <div className="single-form">
                                        <input required {...register('department')} type="text" placeholder="Department" />
                                    </div>

                                    <div className="single-form">
                                        <input required {...register('number')} type="tel" placeholder="Phone" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        {/* <label htmlFor='gender'>Gender</label> */}
                                        <select required {...register('gender')} className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  name='gender' >
                                            <option value=''>Select Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                        </select>
                                    </div>
                                    <div className="single-form">
                                        <input required {...register('address')} type="text" placeholder="Address" />
                                    </div>
                                    {/* <div className="single-form">
                                        <input required {...register('department')} type="text" placeholder="Department" />
                                    </div> */}
                                    <div className="single-form">
                                        <textarea required {...register('topic')} type="text" placeholder="Short note on why you want to become our tutor" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <label htmlFor='fee'>Non Refundable fee for your ID Card and Training Materials</label>
                                    <div className="single-form">
                                        <input required {...register('fee')} type="text" value='₦2,000.00' readOnly />
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    {/* <div className="single-form">
                                        <label htmlFor='mode'>Mode of Tutoring</label>
                                        <select required {...register('mode')} className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}  name='mode' >
                                            <option value=''>Choose ...</option>
                                            <option value='offline'>Offline</option>
                                            <option value='online'>Online</option>
                                        </select>
                                    </div> */}
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <PaystackHookExample />
                                        {/* <button className="btn btn-primary btn-hover-dark w-100">Submit</button> */}
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

export default InstructorStart