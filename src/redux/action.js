import axios from 'axios'
import {postSlice} from './slice'
const {actions:slice}=postSlice

export const getAllPostAction=()=>(dispatch)=>{
const callPostApi=async()=>{
   try {
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch(slice.setAllPost(res.data))
   } catch (error) {
       console.log(error)
   }
}
callPostApi()
}

export const getSinglePostById=(id)=>(dispatch)=>{
     const getById=async()=>{
       try {
            const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(slice.setSinglePostById(res.data))
            console.log(res);
       } catch (error) {
           console.log(error);
       }
     }
     getById()
}