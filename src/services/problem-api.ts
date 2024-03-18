import { BaseResponse, ListResponse } from "../../models/common"
import axiosClient from "./axios-client"

const getProblems = (): Promise<ListResponse> => {
    return axiosClient.get('/api/problems')
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err.response.data
        })
}

const getProblem = (slug: string): Promise<BaseResponse> => {
    return axiosClient.get('/api/problems/slug/' + slug)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err.response.data
        })
}

export const problemApi = {
    getProblems,
    getProblem
}