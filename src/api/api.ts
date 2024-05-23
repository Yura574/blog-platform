import axios from "axios";
import {GetBlogsParamsType, GetPostsParamsType} from "./apiTypes.ts";




const baseURL = 'https://f4701f78130833e39461b07fecd3c4a0.serveo.net'

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const blogsApi = {
    getAllBlogs: (params: GetBlogsParamsType)=> {
        const {pageSize, pageNumber, sortBy, sortDirection,} = params
        return instance.get(`/blogs?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&sortDirection=${sortDirection}`)
    }
}

export const postsApi = {
    getAllPosts: (params: GetPostsParamsType)=> {
        const {pageSize, pageNumber, sortBy, sortDirection} = params
        return instance.get(`/posts?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&sortDirection=${sortDirection}`)
    },
    getPostById: (id: string)=> {
        return instance.get(`/posts/${id}`)
    }
}

