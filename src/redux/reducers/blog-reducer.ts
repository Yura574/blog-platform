import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setIsPending} from "@redux/reducers/common-reducer.ts";
import {blogsApi} from "../../api/api.ts";
import {GetBlogsParamsType} from "../../api/apiTypes.ts";


export const getBlogsThunk = createAsyncThunk('blogs/getBlogs', async (_, {dispatch}) => {
    dispatch(setIsPending(true))
    const params: GetBlogsParamsType = {
        pageSize: 10,
        pageNumber: 1,
        sortBy: 'createdAt',
        sortDirection: 'asc',

    }

    const blogs = await blogsApi.getAllBlogs(params)
    dispatch(setBlogs(blogs.data.items))
    console.log(blogs)


})
export type BlogType= {
    createdAt: string
    description:string
    id: string
    isMembership: boolean
    name: string
    websiteUrl: string
}
type InitialStateType = {
    blogs: BlogType[]
}


const initialState: InitialStateType = {
    blogs: [],
}

const blogSlice = createSlice({
    name: 'blog-reducer',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            console.log(action.payload)
            state.blogs = action.payload
        }
    }
})

export const {setBlogs} = blogSlice.actions
export const blogReducer = blogSlice.reducer
