import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setIsPending} from "@redux/reducers/common-reducer.ts";
import {postsApi} from "../../api/api.ts";
import {GetPostsParamsType} from "../../api/apiTypes.ts";

export type PostType = {
    blogId: string
    blogName: string
    content: string
    createdAt: string
    extendedLikesInfo: {
        likesCount: 2,
        dislikesCount: 0,
        myStatus: 'None',
        newestLikes: {
            addedAt: string
            login: string
            userId: string
        }[]
    }
    id: string
    shortDescription: string
    title: string
}


type InitialStateType = {
    posts: PostType[]
}

export const getPostsThunk = createAsyncThunk('posts/getPosts', async (_, {dispatch}) => {
    dispatch(setIsPending(true))
    const params: GetPostsParamsType = {
        pageSize: 10,
        pageNumber: 1,
        sortBy: 'createdAt',
        sortDirection: 'asc',
    }
    const posts = await postsApi.getAllPosts(params)
  dispatch(setPosts(posts.data.items))
})

const initialState: InitialStateType = {
    posts: []
}

const postSlice = createSlice({
    name: 'postReducer',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    }
})


export const {setPosts} = postSlice.actions
export const postReducer = postSlice.reducer
