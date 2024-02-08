import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Pagination } from './component/Pagination'; 
import { Blogs } from './component/Blogs';
import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';
import { Routes,Route, useSearchParams, useLocation } from 'react-router-dom';




function App() {

  const {fetchBlogPosts,tag,page,category}=useContext(AppContext)

  const [searchParams,setSearchParams]=useSearchParams()
  const location=useLocation()
  
  useEffect(()=>{
   
fetchBlogPosts()
    
  },[])

  return (
   <div>
    <Header/>
    <Blogs/>
    <Pagination/>
   </div>
  
  );
}

export default App;
