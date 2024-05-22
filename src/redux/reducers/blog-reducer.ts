import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getBlogsThunk = createAsyncThunk('blogs/getBlogs', async (args = {} , {dispatch}) => {

})


const initialState = {
    blogs: [],
}

const blogSlice = createSlice({
    name: 'blog-reducer',
    initialState,
    reducers: {}
})
