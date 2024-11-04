import React, { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import logo from '../../images/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import FacultySignUp from './FacultySignUp';
import StudentLogin from './StudentLogin';
import { useNavigate } from 'react-router-dom';


const FacultyLogin = () => {
  const [color1, setColor1] = useState('bg-pink-400');
  const [color2, setColor2] = useState('bg-none');
  const [text1, setText1] = useState('text-white');
  const [text2, setText2] = useState('text-black');
  const [pass, setPass] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [view, setView] = useState('');
  const [user, setUser] = useState('');

  const handlePass = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const navigate = useNavigate()

  const handleClick1 = () => {
    setColor1('bg-pink-400');
    setText1('text-white');
    setColor2('bg-white');
    setText2('text-black');
    setUser('faculty');
  };

  const handleClick2 = () => {
    setColor2('bg-blue-400');
    setText2('text-white');
    setText1('text-black');
    setColor1('bg-white');
    setUser('student');
  };

  const handleView = (view) => {
    setView(view);
  };

  const handleLogin = (e)=> {
    e.preventDefault()
    navigate('/facultyDashboard')
  }

  return (
    <div id='main' className='w-full h-svh flex justify-center items-center'>
      {user === 'student' ? (
        <StudentLogin />
      ) : view === 'signUp' ? (
        <FacultySignUp />
      ) : (
        <div className='w-[60%] h-[600px] flex justify-center items-center'>
          <div className='w-[30%] top-[20%] h-[100px] left-[300px] text-center absolute'>
            <PiStudentBold className='text-white absolute text-3xl top-[20px] left-[100px]' />
            <h1 className='text-white text-3xl'>
              <span className='text-2xl text-black'>Welcome </span>
              <span className='text-2xl'>to </span> <br />
              <span>Mentor </span>
              <span className='text-black'>Link</span>
            </h1>
            <GiTeacher className='absolute text-3xl text-white left-[320px] top-[20px]' />
          </div>

  

          <div className='w-[300px] h-[200px] left-[390px] translate-y-[30px] absolute flex justify-center items-center flex-col'>
            <h1 className='text-white mb-2 text-lg'>New User? Click here to Sign Up!</h1>
            <button
              onClick={() => handleView('signUp')}
              className='backdrop-blur-3xl shadow-sm hover:bg-black shadow-black hover:scale-110 duration-300 ease-linear text-white w-[200px] rounded-full pl-3 pr-3 pt-2 pb-2'
            >
              Sign Up
            </button>
          </div>

          <div id='side1' className='w-[50%] h-[600px] rounded-l-lg bg-gradient-to-r from-pink-300 to-purple-400'></div>
          <div className='bg-white rounded-r-lg w-[50%] h-[600px] relative'>
           <div className='w-[200px] bg-white border border-black absolute rounded-full top-[40px] left-[127px] flex justify-center items-center'>
            <button
              className={`${color1} w-[100px] ${text1} transition-colors duration-300 ease-linear rounded-full`}
              onClick={handleClick1}
            >
              Faculty
            </button>
            <button
              className={`${color2} w-[100px] ${text2} transition-colors duration-300 ease-linear rounded-full`}
              onClick={handleClick2}
            >
              Student
            </button>
          </div>
            <div className='w-full h-full translate-y-[70px]'>
            
              <div className='flex justify-center mt-7'>
                <motion.img
                  src={logo}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    ease: easeInOut,
                    repeatType: 'reverse',
                  }}
                />
              </div>
              <h1 className='text-red-400 text-center text-3xl translate-y-[-20px]'>FACULTY LOGIN</h1>
              <form onSubmit={(e) => handleLogin(e)}>
                <div className='flex items-center justify-center flex-col relative'>
                  <FaRegUserCircle className='absolute left-[87px] translate-y-[-55px] text-gray-400' />
                  <input type='email' required placeholder='Email' className='border border-gray-400 p-2 w-[300px] pl-7 mb-1' />
                  <RiLockPasswordFill className='absolute left-[87px] translate-y-[-11px] text-gray-400' />
                  <input
                    type={passwordType} required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='Password'
                    className='border border-gray-400 p-2 w-[300px] pl-7 mb-7'
                  />
                  <input type='checkbox' onClick={handlePass} className='absolute left-[80px] translate-y-[57px]' />
                  <label htmlFor='pass' className='absolute left-[95px] translate-y-[56px]'>
                    Show Password
                  </label>
                  <button type='submit' className='bg-red-400 hover:bg-black hover:text-white border shadow-sm shadow-black hover:scale-110 duration-300 ease-linear rounded-3xl pl-3 pr-3 pt-2 pb-2 w-[100px] translate-x-[100px]'>
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyLogin;
