import { createContext, useEffect } from "react";
import App from "../App";
import { useState } from "react";
import {baseUrl} from '../baseUrl'



export const AppContext=createContext();


export default function AppContextProvider({children}){
const[loading,setloading]=useState(false)

const[posts,setposts]=useState([])

const [page,setpage]=useState(1)

const[totalpages,settotalpages]=useState(null)





async function fetchBlogPosts(page,tag,category){
    setloading(true)

    let url=`${baseUrl}?page=${page}`

    if(tag){
        url+=`&tag=${tag}`
    }
    if(category){
        url+=`&category=${category}`
    }


    try {
        const result=await fetch(url) 
        const data=await result.json()
     
        setpage(data.page)
        setposts(data.posts)
        settotalpages(data.totalPages)
    } 
    catch (error) {
        console.log('error in fetching data')
        setpage(1);
        setposts([])

        settotalpages(null)

    }
    setloading(false)
}



 function handlePageChange(page){
    setpage(page)
    fetchBlogPosts(page)
 }

 const [tag,setTag]=useState(null)
 const [category,setCategory]=useState(null)

 


const value={

    
    posts,
    setposts,
    loading,
    setloading,
    page,
    setpage,
    totalpages,
    settotalpages,
    fetchBlogPosts,
    handlePageChange,
    tag,setTag,
    category,setCategory
}
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}


