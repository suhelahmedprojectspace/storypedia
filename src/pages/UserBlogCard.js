import React from 'react'

const UserBlogCard = ({ image, title }) => {
    return (

        <div className=" w-[300px] p-2 rounded-lg">
            <p className="card-title m-2 font-bold text-center">{title}</p>
            <img src={image} alt={title} className="object-fit w-[300px] h-[300px] rounded-lg" />

        </div>


    )
}

export default UserBlogCard