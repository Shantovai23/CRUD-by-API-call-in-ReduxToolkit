import {createSlice} from '@reduxjs/toolkit'


export const postSlice=createSlice({
    name:'post',
    initialState:{
        data:[],
        singlePost:{}
    },
    reducers:{
        setAllPost:(state,action)=>{
            state.data=action.payload
            state.singlePost={}
        },
        setSinglePostById:(state,action)=>{
            state.singlePost=action.payload
        }
    }
})