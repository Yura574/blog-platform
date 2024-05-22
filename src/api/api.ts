import axios from "axios";
import {GetBlogsParamsType} from "./apiTypes.ts";




const baseURL = 'https://homework-backend.vercel.app/'

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const blogsApi = {
    getAllBlogs: (params: GetBlogsParamsType)=> {
        const {pageSize, pageNumber, sortBy, sortDirection, searchNameTerm} = params
        return instance.get(`/blogs?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&sortDirection=${sortDirection}&searchNameTerm=${searchNameTerm}`)
    }
}

