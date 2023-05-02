import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { AuthContext } from '../Provider/AuthProvider';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const auth = getAuth(app)

const Signup = () => {
    const [error, setError] = useState('');
    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, password, email, photo);

        if (password < 6) {
            setError("Password Must be 6 Characters or longer")
            return;
        }

        createUserWithEmailAndPassword(auth , email , password)
        .then(result => {
            const loggeduser = result.user;
            console.log(loggeduser);
        })
        .catch(err => console.log(err.message))


    }
    return (
        <div>
            <div className='container mx-auto flex justify-center mt-20 items-center max-w-full'>

                <div>
                    <form onSubmit={handleSignup} className='login-container border p-10'>
                        <h2 className='text-xl font-bold'>Sign Up Here</h2>

                        <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                            <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                            <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className="relative z-0 w-full mt-[54px] mb-[45px] group">
                            <input type="password" name="password" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Passowrd</label>
                        </div>
                        <div className="relative z-0 w-full mt-[54px] mb-[45px] group">
                            <input type="text" name="photo" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                        </div>
                        <div className='flex justify-between'>
                            <span><input type="checkbox" name="" value="Remember Me" id="" /><span className='font-bold ml-2'>Remember Me</span></span>
                            <Link className=' text-red-500 underline'>Forgot Password</Link>
                        </div>
                        
                        <input className='submit w-full mt-4 bg-rose-400 px-5 py-2 text-lg text-white rounded-lg' type="submit" value="Login" />
                        <div className=' mt-2 font-bold text-center mx-auto'>
                            <p>Already Have an Account? <Link to="/login" className='underline text-red-400'>Login Here</Link></p>
                        </div>
                    </form>

                    <div className='mt-4 gap-2 flex items-center'>
                        <div className='w-[200px] left-[506px] top-[663px] border'></div>
                        <div>Or</div>
                        <div className='w-[200px] left-[506px] top-[663px] border'></div>
                    </div>

                    <div>
                        <div className='flex justify-center items-center mt-5'>
                            <div>
                                <Link>
                                    <div className='popup-login border px-10 py-3 rounded-xl flex items-center'>
                                        <FaGithub className='w-[37px] h-[37px] ml-2 rounded-full' />
                                        <p className='mx-auto'>Continue With Facebook</p>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='popup-login border px-10 py-3 rounded-xl flex items-center mt-4'>
                                        <FaGoogle className='w-[37px] h-[30px] text-red-500 ml-2 rounded-full' />
                                        <p className='mx-auto'>Continue With Google</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <p className='my-20'><small>{error}</small></p>
        </div>
    );
};

export default Signup;