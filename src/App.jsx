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
   

    
  },[])

  return (
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
    <Route path='/tag/:tag' element={<TagPage/>}></Route>
    <Route path='/categories/:category' element={<CategoryPage/>}></Route>

   </Routes>
  
  );
}

export default App;
