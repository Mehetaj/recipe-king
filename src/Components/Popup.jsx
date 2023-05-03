import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Popup = () => {
    const { GoogleAuthentication, GitHubAuthentication } = useContext(AuthContext)
    const googleLogin = () => {
        GoogleAuthentication()
            .then(result => {
                toast(result && "Login Successfully"  ,{
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
            .then(error => {
                toast(error?.message, {
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
    }

    const githubLogin = () => {
        GitHubAuthentication()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {

        })
    }
    return (
        <div>
            <div>
                <div className='flex justify-center items-center mt-5'>
                    <div>
                        <Link>
                            <div onClick={githubLogin} className='popup-login border px-10 py-3 rounded-xl flex items-center'>
                                <FaGithub className='w-[37px] h-[37px] ml-2 rounded-full' />
                                <p className='mx-auto'>Continue With Github</p>
                            </div>
                        </Link>
                        <Link>
                            <div onClick={googleLogin} className='popup-login border px-10 py-3 rounded-xl flex items-center mt-4'>
                                <FaGoogle className='w-[37px] h-[30px] text-red-500 ml-2 rounded-full' />
                                <p className='mx-auto'>Continue With Google</p>
                            </div>
                        </Link>
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

export default Popup;