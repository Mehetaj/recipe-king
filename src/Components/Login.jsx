import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [error , setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const emailRef = useRef();

    const { signIn , resetPassword} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset()
                navigate(from , {replace : true})
                
            })
            .catch(error => {
                setError(error.message);
            })
            toast('Succesfully Login Complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
    }


   const handleResetPassword = e => {
    const email = (emailRef.current.value);
    if(!email){
        

        toast('Please Provide your email address to reset password', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        
        return;
    }
    resetPassword(email)
    .then(() => {
        toast('Please check your Mail', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

    })
    .catch(err => setError(err.message))
   }

    return (
        <div className='container mx-auto flex justify-center mt-20 items-center max-w-full'>

            <div>
                <form onSubmit={handleLogin} className='login-container border p-10'>
                    <h2 className='text-xl font-bold'>Login</h2>

                    <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                        <input ref={emailRef} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username or Email</label>
                    </div>
                    <div className="relative z-0 w-full mt-[54px] mb-[45px] group">
                        <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Passowrd</label>
                    </div>
                    <div className='flex justify-between'>
                        <span><input type="checkbox" name="" value="Remember Me" /><span className='font-bold ml-2'>Remember Me</span></span>
                        <Link onClick={handleResetPassword} className=' text-red-500 underline'>Forgot Password</Link>
                    </div>
                    <p className='text-red-400 text-center'><small>{error}</small></p>
                    <input className='submit w-full mt-4 bg-rose-400 px-5 py-2 text-lg text-white rounded-lg' type="submit" value="Login" />
                    <div className=' mt-2 font-bold text-center mx-auto'>
                        <p>Don't Have an Account? <Link to="/signup" className='underline text-red-400'>Sign Up Here</Link></p>
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
                                    <FaGoogle className='w-[37px] h-[30px] text-blue-500 ml-2 rounded-full' />
                                    <p className='mx-auto'>Continue With Google</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;