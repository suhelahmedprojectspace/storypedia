import React from 'react'
import '../App.css'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import UserLikes from './UserLikes'
const BlogCard = ({ title, Blogbody, createon, author, image, isUser, id, userid }) => {
    const valid = localStorage.getItem('userid')
    const navigate = useNavigate()
    const isLogin = true

    const date = moment(createon).format('YYYY-MM-DD');
    const Initial = author.charAt(0)
    const handleDelete = (e) => {
        e.preventDefault()
        navigate(`/deleteBlog/${id}`)

    }
    // const handleLike = async () => {
    //     await axios.put('http://localhost:5000/blog/likes', {
    //         postid: id,
    //         userid: author
    //     })
    // }
    // useEffect(() => {
    //     sendRequest().then((data) => console.log(data)).catch(error => console.log(error))
    // }, [handleLike])
    const handleUpadte = (e) => {
        e.preventDefault()
        navigate(`/updateBlog/${id}`)

    }
    const mystyle = {
        fontFamily: "'Roboto Slab', serif;"
    };
    const handleAccount = () => {
        navigate(`/account/${userid}`)
    }
    return (
        <div className='w-[50%]'>
            <div className="card">
                <div className='flex m-2 items-center justify-between space-x-2 py-2'>
                    <div className='flex space-x-4'>
                        <div className='bg-orange-500  text-white w-[30px] h-[30px] text-center rounded-full' onClick={handleAccount}><h4 className='text-center'>{Initial}</h4></div>
                        <h1 className='text-sm mt-2 font-semibold'>{author}</h1>
                    </div>
                    {isLogin ? <div>
                        {isUser ? <div className='flex space-x-4'>
                            <i className="fas fa-trash-alt text-red-500" onClick={handleDelete}></i>
                            <i className="far fa-edit text-sky-500" onClick={handleUpadte}></i>
                        </div> : ""}
                    </div> : ""}

                </div>

                <div data-mdb-ripple-color="light">
                    <img src={image} className="object-fill h-[400px] w-full" alt={title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p style={mystyle} >{Blogbody}</p>
                    <strong>published on : {date}</strong>
                    <UserLikes userid={userid} postid={id} />

                </div>

            </div>
        </div>
    )
}

export default BlogCard