import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'



export const Pagination = () => {

  const{page,setpage,totalpages,settotalpages,handlePageChange}=useContext(AppContext)

console.log('hiii')
console.log(page)
  return (
    <div className=' sticky bottom-0 flex py-4 shadow-md  bg-white border mt-4 w-full flex-row justify-evenly'>
      <div className='flex gap-2'>
     { 
   page>1 &&  <button className='rounded  p-1 border border-black rounded-s-md'
        onClick={()=> setpage((prev)=> {prev>1 ? (prev=prev-1):(prev=prev)
          handlePageChange(prev)
          return prev})}
        >Previous</button>
        }
        
        
      { page<6&& <button
        onClick={()=> setpage((prev)=>{ 
          prev<6 ? (prev=prev+1):(prev=prev)
          handlePageChange(prev)
        return prev
        })}
        className='rounded  p-1 rounded-s-md border border-black'>Next</button>
}
      </div>

      <div>Page {page} of {totalpages}</div>
    </div>
  )
}
