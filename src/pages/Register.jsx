import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className='flex h-screen bg-gray-200'>
      <div className='m-auto w-96 bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>Sign Up</h2>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your username'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Email
            </label>
            <input
              type='Email'
              name='Email'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your Email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none'
          >
            SignUp
          </button>
        </form>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Already have an account?{" "}
            <NavLink to='/login' className='text-blue-500'>
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
