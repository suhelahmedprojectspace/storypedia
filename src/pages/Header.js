import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/features/authSlice'

const Header = () => {
    // const id = localStorage.setItem('userid')
    const isLogin = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className='flex justify-center '>
            <div className='flex justify-between w-[90%] '>
                <div className='flex mt-2 space-x-2'>
                    <img src="https://img.icons8.com/nolan/48/storyfire.png" />
                    <h1 className='text-2xl text-sky-500 mt-2'>StoryPedia</h1>
                </div>

                <div className='mt-2 flex space-x-4'>

                    {isLogin ? <div className='flex space-x-4'>
                        <Link to="/getAllBlog">Blog</Link>
                        <Link to="/AddBlog">Create Blog</Link>
                        <Link to="/updateBlog/:id">UpdateBlog</Link>
                        <Link to="/account">UserAccount</Link>


                    </div> : ""}

                    {!isLogin ? <div className='flex space-x-4'>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div> : <div className='flex space-x-2'>
                        <p className='flex  rounded-md' onClick={handleLogout}>Logout</p><i className="fas fa-sign-out-alt mt-1 text-sky-500"></i>
                    </div>}


                </div>

            </div>
        </div>
    )
}

export default Header