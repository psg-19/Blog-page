import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import { Card } from './Card'

export const Blogs = () => {




  const{posts,page,category,setCategory,loading,tag,setTag,fetchBlogPosts}=useContext(AppContext)
console.log('hihihhi')
console.log(posts)

  return (
    <div className='max-w-[50%] items-center justify-center min-h-screen flex flex-col mt-3 gap-y-8 mx-auto'>
      
    {
      loading ? (<Spinner/>):(

        posts.length===0 ? (<div>No posts found</div>):(
          posts.map ( (post)=> (
            <div key={post.id} >
              <p className='font-bold '>
                {post.title}
                </p>
                <p className='mt-2'>
                  By <span>{post.author}
                  </span > on <span 
                 
                  className=' font-semibold underline '>{post.category}</span>
               
              </p>
              

              <p className='mt-2 mb-2'>Posted On {post.date}</p>
              <p>{post.content}</p>

            <div   className='mt-2 text-blue-500'>
              {post.tags.map((tag,index)=>{
                return <span  key={index}>{`#${tag}`}</span>
              })}
            </div>

            </div>
          ))
        )

      )
    }

    </div>
  )
}
